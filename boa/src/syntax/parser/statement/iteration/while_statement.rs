use crate::{
    syntax::{
        ast::{node::WhileLoop, Keyword, Punctuator},
        parser::{
            expression::Expression, statement::Statement, AllowAwait, AllowReturn, AllowYield,
            Cursor, ParseError, TokenParser,
        },
    },
    BoaProfiler,
};

use std::io::Read;

/// While statement parsing
///
/// More information:
///  - [MDN documentation][mdn]
///  - [ECMAScript specification][spec]
///
/// [mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
/// [spec]: https://tc39.es/ecma262/#sec-while-statement
#[derive(Debug, Clone, Copy)]
pub(in crate::syntax::parser::statement) struct WhileStatement {
    allow_yield: AllowYield,
    allow_await: AllowAwait,
    allow_return: AllowReturn,
}

impl WhileStatement {
    /// Creates a new `WhileStatement` parser.
    pub(in crate::syntax::parser::statement) fn new<Y, A, R>(
        allow_yield: Y,
        allow_await: A,
        allow_return: R,
    ) -> Self
    where
        Y: Into<AllowYield>,
        A: Into<AllowAwait>,
        R: Into<AllowReturn>,
    {
        Self {
            allow_yield: allow_yield.into(),
            allow_await: allow_await.into(),
            allow_return: allow_return.into(),
        }
    }
}

impl<R> TokenParser<R> for WhileStatement
where
    R: Read,
{
    type Output = WhileLoop;

    fn parse(self, cursor: &mut Cursor<R>, strict_mode: bool) -> Result<Self::Output, ParseError> {
        let _timer = BoaProfiler::global().start_event("WhileStatement", "Parsing");
        cursor.expect(Keyword::While, "while statement")?;

        cursor.expect(Punctuator::OpenParen, "while statement")?;

        let cond =
            Expression::new(true, self.allow_yield, self.allow_await).parse(cursor, strict_mode)?;

        cursor.expect(Punctuator::CloseParen, "while statement")?;

        let body = Statement::new(self.allow_yield, self.allow_await, self.allow_return)
            .parse(cursor, strict_mode)?;

        Ok(WhileLoop::new(cond, body))
    }
}

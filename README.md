# Claimazon

A non-functional MVP of an online shop. Accessible at https://claimazon.com/.

## Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Next](https://nextjs.org/) as the [React](https://reactjs.org/) framework and for serverless API routes.
- [Node](https://nodejs.org/) for the API route.
- [AWS DynamoDB](https://aws.amazon.com/en/dynamodb/) for the database (accessed via [`aws-sdk-js`](https://github.com/aws/aws-sdk-js)).
- [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/) for unit tests.
- [Prettier](http://prettier.io/) for formatting.
- [ESLint](https://eslint.org/) for linting.
- [Vercel](https://vercel.com/) for deployment and domain.

## Follow-Up Questions

**How would you change the API in order to achieve a much better scalable and
maintainable application?**

- Provide an `id` for each document. The `sku` might change, and in turn, old product links would be dead.
- Provide `tags`, `reviews` and `recommendations` as sub-resources. When fetching a list of products, those data are rarely of interest and thus unnecessarily slow down the call.
- Make `author` a separate document with fields such as `name`, `books`, or `image`.
- Turn the `image` and `thumbnail` into one single property. Make that property a templated URL which allows for setting `width` and `height`.
- _`itemsInStock` to always be a number._

**How do you assure that such a change will not change the code functionality of your
MVP client?**

By having separate types for backend responses and client data structures with a single place which parses the one to the other. When either data structure changes, only the parsing needs to be adapted. By using TypeScript over JavaScript adapting this parser cannot be forgotten and is simple at the same time.

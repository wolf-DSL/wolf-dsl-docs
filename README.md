# Wolf DSL Documentation

Official documentation for Wolf DSL - a declarative language for service orchestration and data transformation.

## About Wolf DSL

Wolf DSL enables you to build complex workflows using simple, declarative `.flow` files that focus on **what** you want to accomplish rather than **how** to implement it.

**Language Repository**: [wolf-DSL/flow-language-spec](https://github.com/wolf-DSL/flow-language-spec)

## Documentation Site

**Live Documentation**: [https://wolf-dsl.github.io/wolf-dsl-docs/](https://wolf-dsl.github.io/wolf-dsl-docs/)

## Quick Example

```flow
Schema User {
  string name
  string email
}

Service userService method GET as getUserById 
input User output User {
  Url -> @Config("api.base.url")
  Path -> ${"/users/" + User.name}
  @Header Accept -> ${"application/json"}
}

Flow userFlow {
  Start defaultUser {
    transition { getUserById }
  }
  getUserById {}
}
```

## Local Development

### Prerequisites
- Node.js 20+
- npm or yarn

### Setup
```bash
git clone https://github.com/wolf-DSL/wolf-dsl-docs.git
cd wolf-dsl-docs/website
npm install
```

### Development Server
```bash
npm start
```
Visit `http://localhost:3000/wolf-dsl-docs/`

### Build for Production
```bash
npm run build
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing to this documentation.

## Support

- **Language Issues**: [flow-language-spec issues](https://github.com/wolf-DSL/flow-language-spec/issues)
- **Documentation Issues**: [wolf-dsl-docs issues](https://github.com/wolf-DSL/wolf-dsl-docs/issues)
- **Discussions**: [GitHub Discussions](https://github.com/wolf-DSL/wolf-dsl-docs/discussions)

---

**Wolf DSL Documentation** - *Making service orchestration simple and declarative*

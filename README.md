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
- Node.js 18+
- npm or yarn

### Setup
```bash
git clone https://github.com/wolf-DSL/wolf-dsl-docs.git
cd wolf-dsl-docs
cd website
npm install
```

### Development Server
```bash
npm start
```
Documentation will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## Contributing to Documentation

1. **Fork this repository**
2. **Create a feature branch**: `git checkout -b docs/improve-examples`
3. **Make your changes** to files in the `docs/` directory
4. **Test locally**: `npm start` to preview changes
5. **Submit a pull request**

### Documentation Structure

```
wolf-dsl-docs/
├── docs/                    # Documentation content (MDX files)
│   ├── getting-started/    # Tutorials and setup
│   ├── language/           # Language reference
│   ├── examples/           # Practical examples
│   └── advanced/           # Best practices and guides
├── website/                # Docusaurus configuration
│   ├── docusaurus.config.ts
│   ├── sidebars.ts
│   └── src/css/custom.css
└── .github/workflows/      # CI/CD automation
```

## Content Guidelines

- **Be concise**: Focus on practical implementation
- **Include examples**: Show real-world usage patterns
- **Test examples**: Ensure all code examples are valid Wolf DSL
- **Cross-reference**: Link related concepts appropriately

## Support

- **Language Issues**: [flow-language-spec issues](https://github.com/wolf-DSL/flow-language-spec/issues)
- **Documentation Issues**: [wolf-dsl-docs issues](https://github.com/wolf-DSL/wolf-dsl-docs/issues)
- **Discussions**: [GitHub Discussions](https://github.com/wolf-DSL/wolf-dsl-docs/discussions)

---

**Wolf DSL Documentation** - *Making service orchestration simple and declarative*

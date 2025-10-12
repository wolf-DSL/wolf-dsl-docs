# Contributing to Wolf DSL Documentation

## Before You Start

- Read the [Code of Conduct](.github/CODE_OF_CONDUCT.md)
- Check existing [issues](https://github.com/wolf-DSL/wolf-dsl-docs/issues) and [pull requests](https://github.com/wolf-DSL/wolf-dsl-docs/pulls)
- For large changes, create an issue first

## Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/wolf-dsl-docs.git
cd wolf-dsl-docs/website
npm install
npm start  # Development server at http://localhost:3000
```

Edit files in `docs/`, test locally, then submit a pull request.

## Repository Structure

- `docs/` - Documentation content (MDX files)
- `website/` - Docusaurus configuration
- `.github/` - Issue templates and workflows

## Writing Guidelines

### Content Style
- **Be concise**: Focus on practical implementation
- **Use examples**: Show real-world usage patterns
- **Be accurate**: Ensure all code examples are valid Wolf DSL
- **Cross-reference**: Link to related concepts appropriately

### Code Examples
- Use proper Wolf DSL syntax
- Include realistic, not trivial examples
- Add comments for complex logic
- Test examples when possible

### Formatting
- Use `flow` language identifier for code blocks
- Use MDX components (Tabs, etc.) when helpful
- Include proper frontmatter with title and description
- Use consistent heading hierarchy

## Types of Contributions

- **Bug Fixes**: Correct errors, fix broken links, update outdated information
- **Content Improvements**: Add examples, clarify explanations, add cross-references  
- **New Content**: Create guides, document patterns, add practical examples
- **Style & UX**: Improve navigation, fix formatting, enhance presentation

## Adding New Pages

1. Create `docs/section/new-page.mdx` with proper frontmatter
2. Add to `website/sidebars.ts`
3. Test navigation and links

## Testing Changes

```bash
cd website
npm start     # Development server
npm run build # Production build test
```

## Pull Request Process

Ensure changes build locally, use the PR template, and include clear descriptions of what changed and why.

## Content Priorities

1. **High**: Fix errors, add missing concepts, improve unclear explanations
2. **Medium**: Add advanced examples, improve navigation, add cross-references
3. **Low**: Style improvements, additional examples for well-covered topics

## Getting Help

- [GitHub Discussions](https://github.com/wolf-DSL/wolf-dsl-docs/discussions) - Questions and general discussion
- [GitHub Issues](https://github.com/wolf-DSL/wolf-dsl-docs/issues) - Documentation bugs and requests
- [Language Issues](https://github.com/wolf-DSL/flow-language-spec/issues) - Wolf DSL language questions

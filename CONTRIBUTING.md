# Contributing to Matias Leiva Portfolio

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Testing](#testing)

---

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Keep discussions professional

---

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Git
- Code editor (VS Code recommended)
- Basic knowledge of React, Next.js, and TypeScript

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file with your Supabase credentials
5. Start the development server:
   ```bash
   npm run dev
   ```

---

## Development Workflow

### Branch Naming

- `feature/` - New features (e.g., `feature/dark-mode-toggle`)
- `fix/` - Bug fixes (e.g., `fix/navigation-mobile`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/simplify-api`)

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the coding standards

3. Test your changes thoroughly

4. Commit your changes with a descriptive message

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a pull request

---

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type when possible
- Use type inference when types are obvious

```typescript
// Good
interface User {
  name: string;
  email: string;
}

const user: User = {
  name: 'John',
  email: 'john@example.com'
};

// Bad
const user: any = {
  name: 'John',
  email: 'john@example.com'
};
```

### React Components

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper prop types

```typescript
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={variant}>
      {label}
    </button>
  );
}

// Bad
export function Button(props: any) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Keep consistent spacing and sizing
- Use theme colors from the design system

```typescript
// Good
<div className="p-4 md:p-6 lg:p-8 bg-white dark:bg-zinc-900">
  Content
</div>

// Avoid inline styles
<div style={{ padding: '16px' }}>
  Content
</div>
```

### File Organization

```
app/
  page/           # Pages
components/       # Reusable components
lib/             # Utilities and configurations
public/          # Static assets
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `NavigationBar.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `apiClient.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_FILE_SIZE`)
- **CSS classes**: kebab-case via Tailwind

---

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
# Feature
git commit -m "feat(blog): add pagination support"

# Bug fix
git commit -m "fix(navigation): resolve mobile menu toggle issue"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Refactoring
git commit -m "refactor(api): simplify error handling"
```

### Best Practices

- Write clear, concise commit messages
- Use present tense ("add feature" not "added feature")
- Limit subject line to 50 characters
- Use body to explain what and why, not how
- Reference issues and PRs when relevant

---

## Pull Request Process

### Before Submitting

1. Ensure your code follows the coding standards
2. Test your changes thoroughly
3. Update documentation if needed
4. Rebase on latest main branch
5. Squash commits if necessary

### PR Title

Follow the same format as commit messages:

```
feat(component): add new feature
fix(page): resolve issue
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
- [ ] Tested on mobile and desktop
```

### Review Process

1. Submit your PR
2. Wait for review from maintainers
3. Address feedback and comments
4. Once approved, your PR will be merged

---

## Testing

### Manual Testing

Before submitting a PR, test:

1. **Functionality**: All features work as expected
2. **Responsive Design**: Test on various screen sizes
3. **Dark Mode**: Works in both light and dark themes
4. **Navigation**: All links work correctly
5. **Forms**: Validation and submission work
6. **Performance**: No console errors or warnings

### Browser Testing

Test on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Testing

- Keyboard navigation works
- Screen reader compatible
- Proper ARIA labels
- Sufficient color contrast

---

## Questions?

If you have questions or need help:

1. Check existing documentation
2. Search closed issues and PRs
3. Open a new issue with the `question` label
4. Contact the maintainer directly

---

## Thank You!

Your contributions help make this project better. We appreciate your time and effort! 🙏

class ValidationError extends Error {
  constructor(message, field) {
    super(message)
    this.field = field
  }
}

// example
// throw new ValidationError('Link validation error: invalid url.', 'url')

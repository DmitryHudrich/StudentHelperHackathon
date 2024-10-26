using FluentValidation.Results;

namespace StudentHelper.Application.Common.Exceptions;

public class ValidationException : Exception {
    public ValidationException()
        : base("One or more validation failures have occurred.") {
        Errors = new Dictionary<String, String[]>();
    }

    public ValidationException(IEnumerable<ValidationFailure> failures)
        : this() {
        Errors = failures
            .GroupBy(static e => e.PropertyName, static e => e.ErrorMessage)
            .ToDictionary(static failureGroup => failureGroup.Key, static failureGroup => failureGroup.ToArray());
    }

    public IDictionary<String, String[]> Errors { get; }
}

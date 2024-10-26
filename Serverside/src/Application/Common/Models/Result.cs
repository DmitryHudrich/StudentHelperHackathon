namespace StudentHelper.Application.Common.Models;

public class Result {
    internal Result(Boolean succeeded, IEnumerable<String> errors) {
        Succeeded = succeeded;
        Errors = errors.ToArray();
    }

    public Boolean Succeeded { get; init; }

    public String[] Errors { get; init; }

    public static Result Success() {
        return new Result(true, []);
    }

    public static Result Failure(IEnumerable<String> errors) {
        return new Result(false, errors);
    }
}

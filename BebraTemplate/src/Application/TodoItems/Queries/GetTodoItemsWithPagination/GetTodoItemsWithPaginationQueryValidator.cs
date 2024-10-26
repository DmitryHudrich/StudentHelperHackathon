namespace StudentHelper.Application.TodoItems.Queries.GetTodoItemsWithPagination;

public class GetTodoItemsWithPaginationQueryValidator : AbstractValidator<GetTodoItemsWithPaginationQuery> {
    public GetTodoItemsWithPaginationQueryValidator() {
        RuleFor(static x => x.ListId)
            .NotEmpty().WithMessage("ListId is required.");

        RuleFor(static x => x.PageNumber)
            .GreaterThanOrEqualTo(1).WithMessage("PageNumber at least greater than or equal to 1.");

        RuleFor(static x => x.PageSize)
            .GreaterThanOrEqualTo(1).WithMessage("PageSize at least greater than or equal to 1.");
    }
}

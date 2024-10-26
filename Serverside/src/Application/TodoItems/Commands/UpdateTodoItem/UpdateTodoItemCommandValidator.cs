namespace StudentHelper.Application.TodoItems.Commands.UpdateTodoItem;

public class UpdateTodoItemCommandValidator : AbstractValidator<UpdateTodoItemCommand> {
    public UpdateTodoItemCommandValidator() {
        RuleFor(static v => v.Title)
            .MaximumLength(200)
            .NotEmpty();
    }
}

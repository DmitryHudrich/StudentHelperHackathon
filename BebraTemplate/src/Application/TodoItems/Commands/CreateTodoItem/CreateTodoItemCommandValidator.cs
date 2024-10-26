namespace StudentHelper.Application.TodoItems.Commands.CreateTodoItem;

public class CreateTodoItemCommandValidator : AbstractValidator<CreateTodoItemCommand> {
    public CreateTodoItemCommandValidator() {
        RuleFor(static v => v.Title)
            .MaximumLength(200)
            .NotEmpty();
    }
}

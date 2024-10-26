using StudentHelper.Application.Common.Interfaces;

namespace StudentHelper.Application.TodoItems.Commands.UpdateTodoItem;

public record UpdateTodoItemCommand : IRequest {
    public Int32 Id { get; init; }

    public String? Title { get; init; }

    public Boolean Done { get; init; }
}

public class UpdateTodoItemCommandHandler(IApplicationDbContext context) : IRequestHandler<UpdateTodoItemCommand> {
    public async Task Handle(UpdateTodoItemCommand request, CancellationToken cancellationToken) {
        // var entity = await context.TodoItems
        //     .FindAsync([request.Id], cancellationToken);

        // Guard.Against.NotFound(request.Id, entity);

        // entity.Title = request.Title;
        // entity.Done = request.Done;

        await context.SaveChangesAsync(cancellationToken);
    }
}

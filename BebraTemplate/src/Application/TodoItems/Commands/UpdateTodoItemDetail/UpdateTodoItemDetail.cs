using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Enums;

namespace StudentHelper.Application.TodoItems.Commands.UpdateTodoItemDetail;

public record UpdateTodoItemDetailCommand : IRequest {
    public Int32 Id { get; init; }

    public Int32 ListId { get; init; }

    public PriorityLevel Priority { get; init; }

    public String? Note { get; init; }
}

public class UpdateTodoItemDetailCommandHandler(IApplicationDbContext context) : IRequestHandler<UpdateTodoItemDetailCommand> {
    public async Task Handle(UpdateTodoItemDetailCommand request, CancellationToken cancellationToken) {
        // var entity = await context.TodoItems
        //     .FindAsync([request.Id], cancellationToken);

        // Guard.Against.NotFound(request.Id, entity);
        //
        // entity.ListId = request.ListId;
        // entity.Priority = request.Priority;
        // entity.Note = request.Note;
        //
        await context.SaveChangesAsync(cancellationToken);
    }
}

using StudentHelper.Application.Common.Interfaces;

namespace StudentHelper.Application.ATopic.Commands;

public class DeleteTopicCommand : IRequest<Boolean> {
    public int Id { get; set; }
}

public class DeleteUniversityCommandHandler(IApplicationDbContext context) : IRequestHandler<DeleteTopicCommand, Boolean> {
    public async Task<Boolean> Handle(DeleteTopicCommand request, CancellationToken cancellationToken) {
        var topics = await context.Topics.FindAsync(request.Id);
        if (topics == null) {
            return false;
        }
        context.Topics.Remove(topics);
        await context.SaveChangesAsync(cancellationToken);
        return true;
    }
}


using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.ATopic.Commands;

public class CreateTopicCommand : IRequest<Topic?> {
    public required String Title { get; set; }
    public required String Image { get; set; }
    public required String Content { get; set; }
    public required Int32 BranchId { get; set; }
    public required Int32 UserId { get; set; }
    public List<TopicContact> Contacts { get; set; } = [];
}

public class CreateTopicCommandHandler(IApplicationDbContext context) : IRequestHandler<CreateTopicCommand, Topic?> {
    public async Task<Topic?> Handle(CreateTopicCommand request, CancellationToken cancellationToken) {
        var branch = await context.Branches.FirstOrDefaultAsync(b => b.Id == request.BranchId);
        if (branch == null) {
            return null;
        };
        var topic = new Topic() {
            Title = request.Title,
            Image = request.Image,
            Content = request.Content,
            Branch = branch,
            UserId = request.UserId,
        };
        await context.Topics.AddAsync(topic, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
        return topic;
    }
}

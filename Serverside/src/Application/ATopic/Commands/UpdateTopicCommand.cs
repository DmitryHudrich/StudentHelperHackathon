using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.ATopic.Commands;

public class UpdateTopicCommand : IRequest<Topic?> {
    public required Int32 Id { get; set; }
    public required String Title { get; set; }
    public required String Image { get; set; }
    public required String Content { get; set; }
    public required Int32 BranchId { get; set; }
    public required Int32 UserId { get; set; }
    public List<TopicContact> Contacts { get; set; } = [];
}

public class UpdateTopicCommandHandler(IApplicationDbContext context) : IRequestHandler<UpdateTopicCommand, Topic?> {
    public async Task<Topic?> Handle(UpdateTopicCommand request, CancellationToken cancellationToken) {
        var topic = await context.Topics.FirstOrDefaultAsync(u => u.Id == request.Id, cancellationToken);
        var branch = await context.Branches.FirstOrDefaultAsync(b => b.Id == request.BranchId);
        if (topic == null || branch == null) {
            return null;
        }

        topic.Image = request.Image;
        topic.Title = request.Title;
        topic.Contacts = request.Contacts;
        topic.Content = request.Content;
        topic.Branch = branch;

        await context.SaveChangesAsync(cancellationToken);
        return topic;
    }
}


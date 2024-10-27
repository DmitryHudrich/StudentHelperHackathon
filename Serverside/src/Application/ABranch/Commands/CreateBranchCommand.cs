using StudentHelper.Application.AUniversities.Commands;
using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.ABranch.Commands;

public class CreateBranchCommand : IRequest<BranchResponse> {
    public required String Name { get; set; }
    public required String Address { get; set; }
    public required String Information { get; set; }
    public required String Image { get; set; }
    public required Int32 UniversityId { get; set; }
}

public class BranchResponse {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String Address { get; set; }
    public List<Contact> Contacts { get; set; } = [];
    public required String Information { get; set; }
    public required String Image { get; set; }
    public required List<TopicDto> Topics { get; set; } = [];
}

public class UniversityDto {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String Address { get; set; }
    public required String Information { get; set; }
    public required String Image { get; set; }
    public List<UniversityContact> Contacts { get; set; } = [];
}

public class TopicDto {
    public Int32 Id { get; set; }
    public required String Title { get; set; }
    public required String Image { get; set; }
    public required String Content { get; set; }
    public required Int32 UserId { get; set; }
    public List<Contact> Contacts { get; set; } = [];
}

public class CreateBranchCommandHandler(IApplicationDbContext context) : IRequestHandler<CreateBranchCommand, BranchResponse?> {
    public async Task<BranchResponse> Handle(CreateBranchCommand request, CancellationToken cancellationToken) {
        var branch = new Domain.Entities.Branch() {
            Name = request.Name,
            Address = request.Address,
            Information = request.Information,
            Image = request.Image,
            University = await context.Universities.FirstAsync(b => b.Id == request.UniversityId, cancellationToken),
            Topics = await context.Topics.Where(t => t.Branch.Id == request.UniversityId).ToListAsync()
        };
        await context.Branches.AddAsync(branch);
        await context.SaveChangesAsync(cancellationToken);
        return new BranchResponse() {
            Id = branch.Id,
            Name = branch.Name,
            Address = branch.Address,
            Information = branch.Information,
            Image = branch.Image,
            Topics = branch.Topics.Select(t => new TopicDto {
                Id = t.Id,
                Title = t.Title,
                Image = t.Image,
                Content = t.Content,
                UserId = t.UserId,
                Contacts = t.Contacts.Select(tc => new Contact(
                    tc.Id,
                    tc.Name,
                    tc.Content
                )).ToList()
            }).ToList(),
        };
    }
}

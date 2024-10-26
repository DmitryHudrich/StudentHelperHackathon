using StudentHelper.Application.Common.Interfaces;

namespace StudentHelper.Application.Branch.Commands;

public class CreateBranchCommand : IRequest<StudentHelper.Domain.Entities.Branch> {
    public required String Name { get; set; }
    public required String Address { get; set; }
    public required String Information { get; set; }
    public required String Image { get; set; }
    public required Int32 UniversityId { get; set; }
}

public class CreateBranchCommandHandler(IApplicationDbContext context) : IRequestHandler<CreateBranchCommand, StudentHelper.Domain.Entities.Branch?> {
    public async Task<StudentHelper.Domain.Entities.Branch> Handle(CreateBranchCommand request, CancellationToken cancellationToken) {
        var branch = new StudentHelper.Domain.Entities.Branch() {
            Name = request.Name,
            Address = request.Address,
            Information = request.Information,
            Image = request.Image,
            University = await context.Universities.FirstAsync(b => b.Id == request.UniversityId, cancellationToken),
        };
        await context.Branches.AddAsync(branch);
        await context.SaveChangesAsync(cancellationToken);
        return branch;
    }
}

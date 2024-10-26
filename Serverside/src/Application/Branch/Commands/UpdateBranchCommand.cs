using StudentHelper.Application.Common.Interfaces;

namespace StudentHelper.Application.Branch.Commands; 

public class UpdateBranchCommand : IRequest<Boolean> {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String Address { get; set; }
    public required String Information { get; set; }
    public required String Image { get; set; }
    public required Int32 UniversityId { get; set; }
}

public class UpdateBranchCommandHandler(IApplicationDbContext context) : IRequestHandler<UpdateBranchCommand, Boolean> {
    public async Task<Boolean> Handle(UpdateBranchCommand request, CancellationToken cancellationToken) {
        var branches = await context.Branches.FindAsync(request.Id);

        if (branches == null) {
            return false;
        }

        branches.Address = request.Address;
        branches.Name = request.Name;
        branches.Information = request.Information;
        branches.Image = request.Image;
        await context.SaveChangesAsync(cancellationToken);

        return true;
    }
}

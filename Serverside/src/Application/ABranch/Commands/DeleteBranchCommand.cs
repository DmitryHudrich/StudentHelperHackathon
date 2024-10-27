using StudentHelper.Application.Common.Interfaces;

namespace StudentHelper.Application.ABranch.Commands;

public class DeleteBranchCommand : IRequest<Boolean> {
    public int Id { get; set; }
}

public class DeleteBranchCommandHandler(IApplicationDbContext context) : IRequestHandler<DeleteBranchCommand, Boolean> {
    public async Task<Boolean> Handle(DeleteBranchCommand request, CancellationToken cancellationToken) {
        var branch = await context.Branches.FindAsync(request.Id);
        if (branch == null) {
            return false;
        }
        context.Branches.Remove(branch);
        await context.SaveChangesAsync(cancellationToken);
        return true;
    }
}

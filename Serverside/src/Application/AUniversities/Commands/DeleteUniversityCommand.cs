using StudentHelper.Application.Common.Interfaces;

namespace StudentHelper.Application.AUniversities.Commands;

public class DeleteUniversityCommand : IRequest<Boolean> {
    public int Id { get; set; }
}

public class DeleteUniversityCommandHandler(IApplicationDbContext context) : IRequestHandler<DeleteUniversityCommand, Boolean> {
    public async Task<Boolean> Handle(DeleteUniversityCommand request, CancellationToken cancellationToken) {
        var university = await context.Universities.FindAsync(request.Id);

        if (university == null) {
            return false;
        }
        context.Universities.Remove(university);

        await context.SaveChangesAsync(cancellationToken);

        return true;
    }
}

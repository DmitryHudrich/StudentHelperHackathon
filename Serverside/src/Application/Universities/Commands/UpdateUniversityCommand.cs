using StudentHelper.Application.Common.Interfaces;

public class UpdateUniversityCommand : IRequest<Boolean> {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String MainAddress { get; set; }
    public required String ContactName { get; set; }
    public required String Information { get; set; }
    public required String Image { get; set; }
}

public class UpdateUniversityCommandHandler(IApplicationDbContext context) : IRequestHandler<UpdateUniversityCommand, Boolean> {
    public async Task<Boolean> Handle(UpdateUniversityCommand request, CancellationToken cancellationToken) {
        var university = await context.Universities.FindAsync(request.Id);

        if (university == null) {
            return false;
        }

        university.Name = request.Name;
        university.MainAddress = request.MainAddress;
        university.ContactName = request.ContactName;
        university.Information = request.Information;
        university.Image = request.Image;

        await context.SaveChangesAsync(cancellationToken);

        return true;
    }
}



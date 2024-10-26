namespace StudentHelper.Domain.Entities;

public class Branch {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String Address { get; set; }
    public List<BranchContact> Contacts { get; set; } = [];
    public required String Information { get; set; }
    public required String Image { get; set; }
    public required University University { get; set; }
}

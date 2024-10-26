namespace StudentHelper.Domain.Entities; 

public class Theme {
    public required Int32 Id { get; set; }
    public required String Title { get; set; }
    public required Int32 ContentId { get; set; }
    public required String ContactName { get; set; }
    public required String Image { get; set; }
    public required Int32 AuthorLogin { get; set; }
    public required String BranchName { get; set; }
}

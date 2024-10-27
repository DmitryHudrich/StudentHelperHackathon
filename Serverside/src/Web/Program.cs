using StudentHelper.Application;
using StudentHelper.Infrastructure;
using StudentHelper.Infrastructure.Data;
using StudentHelper.Web;
using StudentHelper.Application.Universities.Queries;
using StudentHelper.Application.Branch.Queries;
using StudentHelper.Application.Branch.Commands;
using StudentHelper.Application.AUniversities.Commands;
using StudentHelper.Application.ATopic.Queries;
using StudentHelper.Application.ATopic.Commands;
using StudentHelper.Application.AUsers;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddKeyVaultIfConfigured(builder.Configuration);

builder.Services.AddApplicationServices();
builder.Services.AddInfrastructureServices(builder.Configuration);
builder.Services.AddWebServices();

var app = builder.Build();

// Configure the HTTP request pipeline.
await app.InitialiseDatabaseAsync();
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

else {
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHealthChecks("/health");

app.UseExceptionHandler(static options => { });

app.MapGroup("/auth").MapIdentityApi<StudentHelper.Infrastructure.Identity.ApplicationUser>();

app.MapGet("/university", static (ISender sender, [AsParameters] GetTopicsByBranch q) => sender.Send(q));
app.MapGet("/university/all", static (ISender sender, [AsParameters] GetAllUniversitiesQuery q) => sender.Send(q));
app.MapPatch("/university", static (ISender sender, [FromBody] UpdateUniversityCommand q) => sender.Send(q));
app.MapPost("/university", static (ISender sender, [FromBody] CreateUniversityCommand q) => sender.Send(q));
app.MapDelete("/university", static (ISender sender, [FromBody] DeleteUniversityCommand q) => sender.Send(q));

app.MapGet("/branch", static (ISender sender, [AsParameters] GetBranchByIdQuery q) => sender.Send(q));
app.MapGet("/branch/byunivercity", static (ISender sender, [AsParameters] GetAllBranchesByUniversityQuery q) => sender.Send(q));
app.MapPatch("/branch", static (ISender sender, [FromBody] UpdateBranchCommand q) => sender.Send(q));
app.MapPost("/branch", static (ISender sender, [FromBody] CreateBranchCommand q) => sender.Send(q));
app.MapDelete("/branch", static (ISender sender, [FromBody] DeleteBranchCommand q) => sender.Send(q));

app.MapPost("/branch/contact", static (ISender sender, [FromBody] AddContactToBranchCommand q) => sender.Send(q));
app.MapDelete("/branch/contact", static (ISender sender, [FromBody] RemoveContactFromBranchCommand q) => sender.Send(q));

app.MapGet("/topic", static (ISender sender, [AsParameters] GetTopicsByBranchQuery q) => sender.Send(q));
app.MapPatch("/topic", static (ISender sender, [FromBody] UpdateTopicCommand q) => sender.Send(q));
app.MapPost("/topic", static (ISender sender, [FromBody] CreateTopicCommand q) => sender.Send(q));
app.MapDelete("/topic", static (ISender sender, [FromBody] DeleteTopicCommand q) => sender.Send(q));

app.MapGet("/profile", (ISender sender, HttpContext context) => {
    var q = new GetUserQuery() {
        Id = context?.User?.FindFirstValue(ClaimTypes.NameIdentifier) ?? String.Empty,
    };
    Console.WriteLine(q.Id);
    return sender.Send(q);
})
    .RequireAuthorization();
app.MapPost("/profile", static (ISender sender, [FromBody] UpdateProfileCommand q) => sender.Send(q))
    .RequireAuthorization();
// app.MapPatch("/profile", static (ISender sender, [FromBody] UpdateUserProfileCommand q) => sender.Send(q));

app.Run();

public partial class Program { }

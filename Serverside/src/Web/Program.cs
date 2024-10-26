using StudentHelper.Application;
using StudentHelper.Application.WeatherForecasts.Queries.GetWeatherForecasts;
using StudentHelper.Application.Universities.Commands;
using StudentHelper.Infrastructure;
using StudentHelper.Infrastructure.Data;
using StudentHelper.Web;
using StudentHelper.Application.Universities.Queries;
using StudentHelper.Application.Branch.Queries;
using StudentHelper.Application.Branch.Commands;

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

app.MapGet("/test", static (ISender sender, [AsParameters] GetWeatherForecastsQuery q) => sender.Send(q));
app.MapGroup("/auth").MapIdentityApi<StudentHelper.Infrastructure.Identity.ApplicationUser>();

app.MapGet("/university", static (ISender sender, [AsParameters] GetUniversityQuery q) => sender.Send(q));
app.MapGet("/university/all", static (ISender sender, [AsParameters] GetAllUniversitiesQuery q) => sender.Send(q));
app.MapPatch("/university", static (ISender sender, [AsParameters] UpdateUniversityCommand q) => sender.Send(q));
app.MapPost("/university", static (ISender sender, [AsParameters] CreateUniversityCommand q) => sender.Send(q));
app.MapDelete("/university", static (ISender sender, [AsParameters] DeleteUniversityCommand q) => sender.Send(q));

app.MapGet("/branch", static (ISender sender, [AsParameters] GetBranchByIdQuery q) => sender.Send(q));
app.MapGet("/branch/byunivercity", static (ISender sender, [AsParameters] GetAllBranchesByUniversityQuery q) => sender.Send(q));
app.MapPatch("/branch", static (ISender sender, [AsParameters] UpdateBranchCommand q) => sender.Send(q));
app.MapPost("/branch", static (ISender sender, [AsParameters] CreateBranchCommand q) => sender.Send(q));
app.MapDelete("/branch", static (ISender sender, [AsParameters] DeleteBranchCommand q) => sender.Send(q));

app.MapPost("/branch/contact", static (ISender sender, [AsParameters] AddContactToBranchCommand q) => sender.Send(q));
app.MapDelete("/branch/contact", static (ISender sender, [AsParameters] RemoveContactFromBranchCommand q) => sender.Send(q));

app.Run();

public partial class Program { }

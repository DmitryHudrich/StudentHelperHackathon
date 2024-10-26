using StudentHelper.Application;
using StudentHelper.Application.WeatherForecasts.Queries.GetWeatherForecasts;
using StudentHelper.Infrastructure;
using StudentHelper.Infrastructure.Data;
using StudentHelper.Web;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddKeyVaultIfConfigured(builder.Configuration);

builder.Services.AddApplicationServices();
builder.Services.AddInfrastructureServices(builder.Configuration);
builder.Services.AddWebServices();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
    await app.InitialiseDatabaseAsync();
    app.UseSwagger();
    app.UseSwaggerUI();
}

else {
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHealthChecks("/health");

app.UseExceptionHandler(static options => { });

app.MapGet("/penis", static (ISender sender, [AsParameters] GetWeatherForecastsQuery q) => sender.Send(q));
app.MapGroup("/auth").MapIdentityApi<StudentHelper.Infrastructure.Identity.ApplicationUser>();

app.Run();

public partial class Program { }

using System.Diagnostics;
using StudentHelper.Application.Common.Interfaces;
using Microsoft.Extensions.Logging;

namespace StudentHelper.Application.Common.Behaviours;

public class PerformanceBehaviour<TRequest, TResponse>(
    ILogger<TRequest> logger,
    IUser user,
    IIdentityService identityService) : IPipelineBehavior<TRequest, TResponse> where TRequest : notnull {
    private readonly Stopwatch timer = new Stopwatch();

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken) {
        timer.Start();

        var response = await next();

        timer.Stop();

        var elapsedMilliseconds = timer.ElapsedMilliseconds;

        if (elapsedMilliseconds > 500) {
            var requestName = typeof(TRequest).Name;
            var userId = user.Id ?? String.Empty;
            var userName = String.Empty;

            if (!String.IsNullOrEmpty(userId)) {
                userName = await identityService.GetUserNameAsync(userId);
            }

            logger.LogWarning("StudentHelper.Long Running Request: {Name} ({ElapsedMilliseconds} milliseconds) {@UserId} {@UserName} {@Request}",
                requestName, elapsedMilliseconds, userId, userName, request);
        }

        return response;
    }
}

using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Moon.Startup))]
namespace Moon
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

        }
    }
}

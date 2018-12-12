using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace employeeWebApi.Controllers
{
    public class employeeDetailController : ApiController
    {
        public IEnumerable<EmplpoyeeDetail> Get()
        {
            using (Angular_DatabaseEntities angDbEntities = new Angular_DatabaseEntities())
            {
                return angDbEntities.EmplpoyeeDetails.ToList();
            }
        }

        //overloded method
        public EmplpoyeeDetail Get(string empcode)
        {
            using (Angular_DatabaseEntities angDbEntities = new Angular_DatabaseEntities())
            {
                return angDbEntities.EmplpoyeeDetails.FirstOrDefault(e => e.empcode == empcode);
            }
        }
    }
}

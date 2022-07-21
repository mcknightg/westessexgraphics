import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Config} from "./config";
import {UserProfileService} from "./user-profile.service";
import {ThemeService} from "./theme.service";
import {DepartmentService} from "./department.service";
import {EmptypeService} from "./emptype.service";
import {PersonService} from "./person.service";
import {PrimarycsrService} from "./primarycsr.service";
import {DepartmentService} from "./department.service";
import {EmptypeService} from "./emptype.service";
import {PersonService} from "./person.service";
import {SalespersonService} from "./salesperson.service";
import {ShipmethodService} from "./shipmethod.service";
import {CustomerService} from "./customer.service";
import {DepartmentService} from "./department.service";
import {EmptypeService} from "./emptype.service";
import {PersonService} from "./person.service";
import {CustomerserviceService} from "./customerservice.service";
import {InvoiceService} from "./invoice.service";
import {JobshipmethodService} from "./jobshipmethod.service";
import {PersonService} from "./person.service";
import {ShiptoService} from "./shipto.service";
import {OrientationService} from "./orientation.service";
import {RateunitsService} from "./rateunits.service";
import {ServicetypeService} from "./servicetype.service";
import {ProcplaterateService} from "./procplaterate.service";
import {RateunitsService} from "./rateunits.service";
import {ServicetypeService} from "./servicetype.service";
import {SpotplaterateService} from "./spotplaterate.service";
import {RateunitsService} from "./rateunits.service";
import {ServicetypeService} from "./servicetype.service";
import {VarnplaterateService} from "./varnplaterate.service";
import {SpecsheetService} from "./specsheet.service";
import {StatusService} from "./status.service";
import {UpcinfoService} from "./upcinfo.service";
import {jobService} from "./job.service";

@NgModule({
  providers: [
    UserProfileService,
    ThemeService,
		DepartmentService,
		EmptypeService,
		PersonService,
		PrimarycsrService,
		DepartmentService,
		EmptypeService,
		PersonService,
		SalespersonService,
		ShipmethodService,
		CustomerService,
		DepartmentService,
		EmptypeService,
		PersonService,
		CustomerserviceService,
		InvoiceService,
		JobshipmethodService,
		PersonService,
		ShiptoService,
		OrientationService,
		RateunitsService,
		ServicetypeService,
		ProcplaterateService,
		RateunitsService,
		ServicetypeService,
		SpotplaterateService,
		RateunitsService,
		ServicetypeService,
		VarnplaterateService,
		SpecsheetService,
		StatusService,
		UpcinfoService,
		jobService,

  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule {
  public static forRoot(environment: any): Config{
    return new Config(environment);
  }
}

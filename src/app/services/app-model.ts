export interface Department{
 id:number | null;
 name:string | null;
 classType:string | null;
}

export interface Emptype{
 id:number | null;
 description:string | null;
 classType:string | null;
}

export interface Person{
 id:number | null;
 emailaddress:string | null;
 emptype:Emptype | null;
 fax:string | null;
 fullname:string | null;
 isdefault:string | null;
 jobtitle:string | null;
 mobile:string | null;
 phone:string | null;
 classType:string | null;
}

export interface Primarycsr{
 id:number | null;
 department:Department | null;
 person:Person | null;
 classType:string | null;
}

export interface Department{
 id:number | null;
 name:string | null;
 classType:string | null;
}

export interface Emptype{
 id:number | null;
 description:string | null;
 classType:string | null;
}

export interface Person{
 id:number | null;
 emailaddress:string | null;
 emptype:Emptype | null;
 fax:string | null;
 fullname:string | null;
 initials:string | null;
 isdefault:string | null;
 jobtitle:string | null;
 mobile:string | null;
 phone:string | null;
 classType:string | null;
}

export interface Salesperson{
 id:number | null;
 department:Department | null;
 person:Person | null;
 classType:string | null;
}

export interface Shipmethod{
 id:number | null;
 name:string | null;
 classType:string | null;
}

export interface Customer{
 id:number | null;
 customernotes:string | null;
 fax:string | null;
 fedexnumber:string | null;
 foldername:string | null;
 hidden:string | null;
 industry:string | null;
 location:string | null;
 multiplier:number | null;
 name:string | null;
 note:string | null;
 phone:string | null;
 platemat:string | null;
 platemat2:string | null;
 platetype:string | null;
 platetype2:string | null;
 primarycsr:Primarycsr | null;
 proofingreqs:string | null;
 salesperson:Salesperson | null;
 shipmethod:Shipmethod | null;
 terms:string | null;
 termsdue:number | null;
 type:string | null;
 upsnumber:string | null;
 wasteinches:number | null;
 classType:string | null;
}

export interface Department{
 id:number | null;
 name:string | null;
 classType:string | null;
}

export interface Emptype{
 id:number | null;
 description:string | null;
 classType:string | null;
}

export interface Person{
 id:number | null;
 emailaddress:string | null;
 emptype:Emptype | null;
 fax:string | null;
 fullname:string | null;
 isdefault:string | null;
 jobtitle:string | null;
 mobile:string | null;
 phone:string | null;
 classType:string | null;
}

export interface Customerservice{
 id:number | null;
 department:Department | null;
 person:Person | null;
 classType:string | null;
}

export interface Invoice{
 id:number | null;
 approved:string | null;
 iifCreated:string | null;
 invoicedate:string | null;
 plates:number | null;
 revisions:number | null;
 total:string | null;
 classType:string | null;
}

export interface Jobshipmethod{
 id:number | null;
 name:string | null;
 classType:string | null;
}

export interface Person{
 id:number | null;
 emailaddress:string | null;
 isdefault:string | null;
 classType:string | null;
}

export interface Shipto{
 id:number | null;
 address1:string | null;
 address2:string | null;
 altcompanyname:string | null;
 attn:string | null;
 city:string | null;
 company:string | null;
 country:string | null;
 note:string | null;
 state:string | null;
 zip:string | null;
 classType:string | null;
}

export interface Orientation{
 id:number | null;
 imgpath:string | null;
 name:string | null;
 classType:string | null;
}

export interface Rateunits{
 id:number | null;
 name:string | null;
 classType:string | null;
}

export interface Servicetype{
 id:number | null;
 categoryname:string | null;
 iifclass:string | null;
 iifcode:string | null;
 type:string | null;
 classType:string | null;
}

export interface Procplaterate{
 id:number | null;
 baseprice:number | null;
 isdefault:string | null;
 rateunits:Rateunits | null;
 seconddescription:string | null;
 servicenote:string | null;
 servicetype:Servicetype | null;
 size:string | null;
 classType:string | null;
}

export interface Rateunits{
 id:number | null;
 name:string | null;
 classType:string | null;
}

export interface Servicetype{
 id:number | null;
 categoryname:string | null;
 iifclass:string | null;
 iifcode:string | null;
 type:string | null;
 classType:string | null;
}

export interface Spotplaterate{
 id:number | null;
 baseprice:number | null;
 isdefault:string | null;
 rateunits:Rateunits | null;
 seconddescription:string | null;
 servicenote:string | null;
 servicetype:Servicetype | null;
 size:string | null;
 classType:string | null;
}

export interface Rateunits{
 id:number | null;
 name:string | null;
 classType:string | null;
}

export interface Servicetype{
 id:number | null;
 categoryname:string | null;
 iifclass:string | null;
 iifcode:string | null;
 type:string | null;
 classType:string | null;
}

export interface Varnplaterate{
 id:number | null;
 baseprice:number | null;
 isdefault:string | null;
 rateunits:Rateunits | null;
 seconddescription:string | null;
 servicenote:string | null;
 servicetype:Servicetype | null;
 size:string | null;
 classType:string | null;
}

export interface Specsheet{
 id:number | null;
 addtonearline:string | null;
 approvalrequired:string | null;
 avtlocation:string | null;
 avttype:string | null;
 barsneeded:string | null;
 barwidthreduction:string | null;
 bcd:string | null;
 bearercolor:string | null;
 bearerlocation:string | null;
 bearersize:string | null;
 bleed:string | null;
 bstlocation:string | null;
 bsttype:string | null;
 centerlinetriangle:string | null;
 centermarks:string | null;
 clampbearers:string | null;
 cropmark:string | null;
 cropmarklocation:string | null;
 cushionneeded:string | null;
 description:string | null;
 devicetype:string | null;
 distheight:string | null;
 distwidth:string | null;
 emulsionfaceprintdd:string | null;
 engravingneeded:string | null;
 eyespotcolor:string | null;
 eyespotlocation:string | null;
 eyespotqty:string | null;
 eyespotsize:string | null;
 filetype:string | null;
 filmcurve:string | null;
 firstknife:string | null;
 gauge:string | null;
 gmghotfolder:string | null;
 gmgprofile:string | null;
 ispublic:string | null;
 jobid:number | null;
 linescreen:string | null;
 magneticback:string | null;
 microdotlocation:string | null;
 microdotqty:string | null;
 microdotsize:string | null;
 minimumplatechg:number | null;
 mirror:string | null;
 negative:string | null;
 orientation:Orientation | null;
 orientationmark:string | null;
 other:string | null;
 outsideplatematerial:string | null;
 outsideservicetype:string | null;
 pdfoutput:string | null;
 pharmdistortion:string | null;
 pharmrepeat:string | null;
 pharmstepdist:string | null;
 pharmstepqty:string | null;
 pinregisterlocation:string | null;
 pinregisterqty:string | null;
 pinregistersize:string | null;
 platebend:string | null;
 platefinalheight:string | null;
 platefinalwidth:string | null;
 plateheight:string | null;
 platemarks:string | null;
 platematerial:string | null;
 plateoffset:string | null;
 platerelief:string | null;
 platethickness:string | null;
 platetype:string | null;
 platewidth:string | null;
 printsurface:string | null;
 procamplitude:string | null;
 procanilox:string | null;
 procbump:string | null;
 procfilmcurve:string | null;
 procfsync:string | null;
 proclinescreen:string | null;
 procmindot:string | null;
 procplatemat:string | null;
 procplaterate:Procplaterate | null;
 procplaterelief:string | null;
 procresolution:string | null;
 procscreentype:string | null;
 proctrap:string | null;
 proofingnotes:string | null;
 resolution:string | null;
 runningbearer:string | null;
 runningbearers:string | null;
 scribespecs:string | null;
 sideguide:string | null;
 sleeveface:string | null;
 slitlinecolor:string | null;
 slitlinelocation:string | null;
 slitlinesize:string | null;
 specnotes:string | null;
 spotamplitude:string | null;
 spotanilox:string | null;
 spotbump:string | null;
 spotfilmcurve:string | null;
 spotfsync:string | null;
 spotlinescreen:string | null;
 spotmindot:string | null;
 spotplatemat:string | null;
 spotplaterate:Spotplaterate | null;
 spotplaterelief:string | null;
 spotresolution:string | null;
 spotscreentype:string | null;
 spottrap:string | null;
 stickyback:string | null;
 target:string | null;
 tonewedgecolors:string | null;
 tonewedgelocation:string | null;
 tonewedgepercent:string | null;
 tonewedgesize:string | null;
 trashafterthirtydays:string | null;
 trimspecs:string | null;
 varnamplitude:string | null;
 varnanilox:string | null;
 varnbump:string | null;
 varnfilmcurve:string | null;
 varnfsync:string | null;
 varnlinescreen:string | null;
 varnmindot:string | null;
 varnplatemat:string | null;
 varnplaterate:Varnplaterate | null;
 varnplaterelief:string | null;
 varnresolution:string | null;
 varnscreentype:string | null;
 varntrap:string | null;
 whitecutback:string | null;
 classType:string | null;
}

export interface Status{
 id:number | null;
 status:string | null;
 classType:string | null;
}

export interface Upcinfo{
 id:number | null;
 magnification:string | null;
 number:string | null;
 qrcode:string | null;
 qrcodesize:string | null;
 type:string | null;
 classType:string | null;
}

export interface job{
 id:number | null;
 actualcenters:string | null;
 actualcenters2:string | null;
 actualnounits:string | null;
 actualnounits2:string | null;
 addelectronicart:string | null;
 addnegs:string | null;
 addother:string | null;
 addpolymer:string | null;
 addposttiffs:string | null;
 addpreflight:string | null;
 aexmlsent:string | null;
 archived:string | null;
 artnumb:string | null;
 barcodecolor:string | null;
 billingstatus:string | null;
 compensatedrepeat:string | null;
 completiondate:string | null;
 contactemail:string | null;
 contactperson:string | null;
 customer:Customer | null;
 customerservice:Customerservice | null;
 cylinderrepeat:string | null;
 dateentry:string | null;
 distoredsizearound:string | null;
 distortedcenters:string | null;
 distortedcenters2:string | null;
 distortedsizeacross:string | null;
 distorttype:string | null;
 entryPerson:string | null;
 entrydate:string | null;
 facebackprint:string | null;
 filename:string | null;
 invoice:Invoice | null;
 invoicenumb:string | null;
 jobshipmethod:Jobshipmethod | null;
 lastpickedspecsheet:string | null;
 name:string | null;
 neworreplate:string | null;
 orientation:string | null;
 person:Person | null;
 pitch:string | null;
 platesordered:number | null;
 polymerdue:string | null;
 ponumbertitled:string | null;
 portalemail:string | null;
 portalnotes:string | null;
 prevtgnumber:string | null;
 projectId:string | null;
 proofsordered:number | null;
 readytoship:string | null;
 removed:string | null;
 revisions:number | null;
 scheduleDepts:string | null;
 shipto:Shipto | null;
 source:string | null;
 specsheet:Specsheet | null;
 staggeracross:string | null;
 status:Status | null;
 teeth:string | null;
 templategusset:string | null;
 templateheight:string | null;
 templatelip:string | null;
 templatewidth:string | null;
 trashafterthirtydays:string | null;
 upcinfo:Upcinfo | null;
 urgency:string | null;
 workflow:string | null;
 classType:string | null;
}


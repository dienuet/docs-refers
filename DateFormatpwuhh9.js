var _AD_ERA=null;
var _THAI_BUDDHIST_YEAR_OFFSET=543;
var _GREGORIAN_MONTHS_LASTDAYOFYEAR_NONLEAP=[31,59,90,120,151,181,212,243,273,304,334,365];
var _GREGORIAN_MONTHS_LASTDAYOFYEAR_LEAP=[31,60,91,121,152,182,213,244,274,305,335,366];
var _MILLIS_PER_DAY=86400000;
function _getADEra()
{
if(_AD_ERA==null)
{
_AD_ERA=new Date(0);
_AD_ERA.setFullYear(1);
}
return _AD_ERA;
}
function _isStrict(
a0,
a1)
{
var a2=["FullYear","Month","Date","Hours","Minutes",
"Seconds","Milliseconds"];
for(var a3=0;a3<a2.length;a3++)
{
var a4="parsed"+a2[a3];
if(a0[a4]!=null&&
a0[a4]!=a1["get"+a2[a3]]())
{
return false;
}
}
return true;
}
function _doClumping(
a0,
a1,
a2,
a3,
a4,
a5
)
{
var a6=a0.length;
var a7=false;
var a8=0;
var a9=void 0;
var a10=0;
var a11=null;
for(var a12=0;a12<a6;a12++)
{
var a13=a0.charAt(a12);
if(a7)
{
if(a13=="\'")
{
a7=false;
if(a8!=1&&a10!=a11)
{
a10++;
a8--;
}
if(!a3(a0,
a1,
a2,
"\'",
a10,
a8,
a4,
a5))
{
return false;
}
var a14=a12+1;
if(a14<a6)
{
var a15=a0.charAt(a14);
if(a15=="\'")
{
a11=a14;
}
}
a8=0;
a9=void 0;
}
else
{
a8++;
}
}
else
{
if(a13!=a9)
{
if(a8!=0)
{
if(!a3(a0,
a1,
a2,
a9,
a10,
a8,
a4,
a5))
{
return false;
}
a8=0;
a9=void 0;
}
if(a13=='\'')
{
a7=true;
}
a10=a12;
a9=a13;
}
a8++;
}
}
if(a8!=0)
{
if(!a3(a0,
a1,
a2,
a9,
a10,
a8,
a4,
a5))
{
return false;
}
}
return true;
}
function _subformat(
a0,
a1,
a2,
a3,
a4,
a5,
a6,
a7
)
{
var a8=null;
var a9=false;
if((a3>='A')&&(a3<='Z')||
(a3>='a')&&(a3<='z'))
{
switch(a3)
{
case'D':
{
var a10=new Date(a6.getFullYear(),0,1);
var a11=a6-a10;
var a12=Math.floor(a11/_MILLIS_PER_DAY);
a8=(a12+1);
}
break;
case'E':
{
var a13=a6.getDay();
a8=(a5<=3)
?a1.getShortWeekdays()[a13]
:a1.getWeekdays()[a13];
}
break;
case'F':
a8="(Day of week in month)";
break;
case'G':
{
var a14=a1.getEras();
a8=(a6.getTime()<_getADEra().getTime())
?a14[0]
:a14[1];
}
break;
case'M':
{
var a15=a6.getMonth();
if(a5<=2)
{
a8=_getPaddedNumber(a15+1,a5);
}
else if(a5==3)
{
a8=a1.getShortMonths()[a15];
}
else
{
a8=a1.getMonths()[a15];
}
}
break;
case'S':
a8=_getPaddedNumber(a6.getMilliseconds(),a5);
break;
case'W':
a8="(Week in Month)";
break;
case'a':
{
var a16=a1.getAmPmStrings();
a8=(_isPM(a6.getHours()))
?a16[1]
:a16[0];
}
break;
case'd':
a8=_getPaddedNumber(a6.getDate(),a5);
break;
case'h':
hours=a6.getHours();
if(_isPM(hours))
hours-=12;
if(hours==0)
hours=12;
a8=_getPaddedNumber(hours,a5);
break;
case'K':
hours=a6.getHours();
if(_isPM(hours))
hours-=12;
a8=_getPaddedNumber(hours,a5);
break;
case'k':
hours=a6.getHours();
if(hours==0)
hours=24;
a8=_getPaddedNumber(hours,a5);
break;
case'H':
a8=_getPaddedNumber(a6.getHours(),a5);
break;
case'm':
a8=_getPaddedNumber(a6.getMinutes(),a5);
break;
case's':
a8=_getPaddedNumber(a6.getSeconds(),a5);
break;
case'w':
a8="(Week in year)";
break;
case'y':
{
var a17=a6.getFullYear();
if(a2=="th_TH")
a17+=_THAI_BUDDHIST_YEAR_OFFSET;
var a18=(a5<=2)
?a5
:null;
a8=_getPaddedNumber(a17,a5,a18);
}
break;
case'z':
{
a8="GMT";
var a19=_getTimeZoneOffsetString(a6,false);
if(a19)
{
a8+=a19[0];
a8+=":"
a8+=a19[1];
}
}
break;
case'Z':
{
var a19=_getTimeZoneOffsetString(a6,true);
if(a19)
{
a8=a19[0];
a8+=a19[1];
}
else
{
a8="";
}
}
break;
default:
a8="";
}
}
else
{
a8=a0.substring(a4,a4+a5);
}
a7.value+=a8;
return true;
}
function _getTimeZoneOffsetString(a0,a1)
{
var a2=-1*a0.getTimezoneOffset();
a2+=_getLocaleTimeZoneDifference();
if(a1||a2!=0)
{
var a3=new Array(2);
if(a2<0)
{
a3[0]="-";
a2=-a2
}
else
{
a3[0]="+";
}
a3[0]+=_getPaddedNumber(Math.floor(a2/60),2);
a3[1]=_getPaddedNumber(a2%60,2);
return a3;
}
}
function _getLocaleTimeZoneDifference()
{
var a0=new Date();
var a1=a0.getTimezoneOffset()*-1;
var a2=0;
return a2-a1;
}
function _isLeapYear(a0)
{
if(a0%4)
return false;
else if(a0%100)
return true;
else if(a0%400)
return false;
else
return true;
}
function _subparse(
a0,
a1,
a2,
a3,
a4,
a5,
a6,
a7
)
{
var a8=a6.currIndex;
var a9=(a4+a5<a0.length)?
a0.charAt(a4+a5):null;
var a10=("DFMSWdhkHKmswy".indexOf(a9)!=-1);
if((a3>='A')&&(a3<='Z')||
(a3>='a')&&(a3<='z'))
{
switch(a3)
{
case'D':
var a11=_accumulateNumber(a6,!a10?3:a5);
if(a11==null)
return false;
else
a6.parsedDayOfYear=a11;
break;
case'E':
{
var a12=_matchArray(a6,
(a5<=3)
?a1.getShortWeekdays()
:a1.getWeekdays());
if(a12==null)
{
return false;
}
}
break;
case'F':
if(_accumulateNumber(a6,!a10?2:a5)==null)
{
return false;
}
break;
case'G':
{
var a13=_matchArray(a6,a1.getEras());
if(a13!=null)
{
if(a13==0)
{
a6.parsedBC=true;
}
}
else
{
return false;
}
}
break;
case'M':
{
var a14;
var a15=0;
if(a5<=2)
{
a14=_accumulateNumber(a6,!a10?2:a5);
a15=-1;
}
else
{
var a16=(a5==3)
?a1.getShortMonths()
:a1.getMonths();
a14=_matchArray(a6,a16);
}
if(a14!=null)
{
a6.parsedMonth=(a14+a15);
}
else
{
return false;
}
}
break;
case'S':
{
var a17=_accumulateNumber(a6,!a10?3:a5);
if(a17!=null)
{
a6.parsedMilliseconds=a17;
}
else
{
return false;
}
}
break;
case'W':
if(_accumulateNumber(a6,!a10?2:a5)==null)
{
return false;
}
break;
case'a':
{
var a18=_matchArray(a6,
a1.getAmPmStrings());
if(a18==null)
{
return false;
}
else
{
if(a18==1)
{
a6.isPM=true;
}
}
}
break;
case'd':
{
var a19=_accumulateNumber(a6,!a10?2:a5);
if(a19!=null)
{
a6.parsedDate=a19;
}
else
{
return false;
}
}
break;
case'h':
case'k':
case'H':
case'K':
{
var a20=_accumulateNumber(a6,!a10?2:a5);
if(a20!=null)
{
if((a3=='h')&&(a20==12))
a20=0;
if((a3=='k')&&(a20==24))
a20=0;
a6.parsedHour=a20;
}
else
{
return false;
}
}
break;
case'm':
{
var a21=_accumulateNumber(a6,!a10?2:a5);
if(a21!=null)
{
a6.parsedMinutes=a21;
}
else
{
return false;
}
}
break;
case's':
{
var a22=_accumulateNumber(a6,!a10?2:a5);
if(a22!=null)
{
a6.parsedSeconds=a22;
}
else
{
return false;
}
}
break;
case'w':
if(_accumulateNumber(a6,!a10?2:a5)==null)
{
return false;
}
break;
case'y':
{
var a23=_accumulateNumber(a6,!a10?6:a5);
var a24=a6.currIndex-a8;
if(a23!=null)
{
if((a24>2)&&
(a5<=2)&&
(a23<=999))
{
return false;
}
else if((a5<=2)&&(a23>=0)&&(a23<=100))
{
a23=_fix2DYear(a23,a2);
}
else if(a5==4)
{
if(a24<=2)
a23=_fix2DYear(a23);
}
if(a23==0)
return false;
if(a2=="th_TH")
a23-=_THAI_BUDDHIST_YEAR_OFFSET;
a6.parsedFullYear=a23;
}
else
{
return false;
}
}
break;
case'z':
{
if(!_matchText(a6,"GMT"))
{
return false;
}
if((a6.parseString.length-a6.currIndex)>0)
{
if(_matchArray(a6,["-","+"])==null)
{
return false;
}
var a25=_accumulateNumber(a6,2);
if(a25==null)
{
return false;
}
a6.hourOffset=a25;
if(!_matchText(a6,":"))
{
return false;
}
var a26;
if(((a6.parseString.length-a6.currIndex)<2)||
(a26=_accumulateNumber(a6,2))==null)
{
return false;
}
a6.minOffset=a26;
}
}
break;
case'Z':
{
if((a6.parseString.length-a6.currIndex)<5)
{
return false;
}
if(_matchArray(a6,["-","+"])==null)
{
return false;
}
var a25=_accumulateNumber(a6,2)
if(a25==null)
{
return false;
}
a6.hourOffset=a25;
var a26=_accumulateNumber(a6,2)
if(a26==null)
{
return false;
}
a6.minOffset=null;
}
break;
default:
}
}
else
{
return _matchText(a6,
a0.substring(a4,a4+a5));
}
return true;
}
function _fix2DYear(a0,a1)
{
var a2;
if(_df2DYS!=null)
{
var a3=_df2DYS;
if(a1=="th_TH")
a3+=_THAI_BUDDHIST_YEAR_OFFSET;
a2=a3-(a3%100);
a0+=a2;
if(a0<a3)
a0+=100;
}
else
{
var a4=new Date().getFullYear();
if(a1=="th_TH")
a4+=_THAI_BUDDHIST_YEAR_OFFSET;
a2=a4-(a4%100)-100;
a0+=a2;
if(a0+80<a4)
{
a0+=100;
}
}
return a0;
}
function _matchArray(
a0,
a1
)
{
var a2=0;
var a3=-1;
for(var a4=0;a4<a1.length;a4++)
{
if(_matchText(a0,a1[a4],false))
{
if(a1[a4].length>a2)
{
a3=a4;
a2=a1[a4].length;
}
}
}
if(a3!=-1)
{
a0.currIndex+=a2;
return a3;
}
return null;
}
function _matchText(
a0,
a1,
a2
)
{
if(!a1)
return false;
var a3=a1.length;
var a4=a0.currIndex;
var a5=a0.parseString;
if(a3>a5.length-a4)
{
return false;
}
var a6=a5.substring(a4,a4+a3);
var a7=a6.toLowerCase();
var a8=a1.toLowerCase();
if(a7!=a8)
return false;
if(a2!=false)
a0.currIndex+=a3;
return true;
}
function _accumulateNumber(
a0,
a1
)
{
var a2=a0.currIndex;
var a3=a2;
var a4=a0.parseString;
var a5=a4.length;
if(a5>a3+a1)
a5=a3+a1;
var a6=0;
while(a3<a5)
{
var a7=parseDigit(a4.charAt(a3));
if(!isNaN(a7))
{
a6*=10;
a6+=a7;
a3++;
}
else
{
break;
}
}
if(a2!=a3)
{
a0.currIndex=a3;
return a6;
}
else
{
return null;
}
}
function _isPM(
a0
)
{
return(a0>=12);
}
function _getPaddedNumber(
a0,
a1,
a2
)
{
var a3=a0.toString();
if(a1!=null)
{
var a4=a1-a3.length;
while(a4>0)
{
a3="0"+a3;
a4--;
}
}
if(a2!=null)
{
var a5=a3.length-a2;
if(a5>0)
{
a3=a3.substring(a5,
a5+a2);
}
}
return a3;
}
var _CONVENIENCE_PATTERNS=null;
function TrDateTimeConverter(
a0,
a1,
a2,
a3,
a4,
a5
)
{
this._class="TrDateTimeConverter";
this._exampleString=a2;
this._type=a3;
this._messages=a4;
this._offset=null;
this._localeSymbols=getLocaleSymbols(a1);
if(a0==null)
a0=this._localeSymbols.getShortDatePatternString();
var a6=this._initPatterns(a0,a1);
this._pattern=a6;
if(this._exampleString==null&&a6!=null&&a6.length>0)
this._exampleString=a6[0];
this._locale=(a1!=null)?a1:getJavaLanguage(a1);
this._isDisabled=a5;
}
TrDateTimeConverter.prototype=new TrConverter();
TrDateTimeConverter.prototype.getFormatHint=function()
{
if(this.isDisabled())
return null;
if(this._messages&&this._messages["hint"])
{
return TrMessageFactory.createCustomMessage(this._messages["hint"],
""+this._exampleString);
}
else
{
var a7="org.apache.myfaces.trinidad.convert.DateTimeConverter."+this._type+"_HINT";
return TrMessageFactory.createMessage(a7,
""+this._exampleString);
}
}
TrDateTimeConverter.prototype.getAsString=function(
a8
)
{
if(this.isDisabled())
return a8;
if(this._offset)
{
var a9=a8.getMinutes();
a8.setMinutes((+a9)-parseInt(this._offset));
}
var a10=new Object();
a10.value="";
var a11=this._pattern;
if(typeof a11!="string")
a11=a11[0];
_doClumping(a11,
this._localeSymbols,
this._locale,
_subformat,
a8,
a10);
if(this._offset)
{
var a12=(((this._offset+a8.getTimezoneOffset())*-1)/60);
if(parseInt(a12)>0)
{
a10.value=a10.value+"+"
}
a10.value=a10.value+a12+":00";
}
return a10.value;
}
TrDateTimeConverter.prototype.setDiffInMins=function(
a13
)
{
this._offset=a13;
}
TrDateTimeConverter.prototype.getDiffInMins=function()
{
return this._offset;
}
TrDateTimeConverter.prototype.getLocaleSymbols=function()
{
return this._localeSymbols;
}
TrDateTimeConverter.prototype.isDisabled=function()
{
return this._isDisabled;
}
TrDateTimeConverter.prototype.getAsObject=function(
a14,
a15
)
{
if(this.isDisabled())
return a14;
if(a14==null)
return null;
a14=TrFormatUtils.trim(a14);
if(a14.length==0)
return null;
var a16=this._pattern;
var a17;
var a18="org.apache.myfaces.trinidad.convert.DateTimeConverter.CONVERT_"+this._type;
if(this._messages&&this._messages["detail"])
{
a17=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a18),
this._messages["detail"],
a15,
a14,
this._exampleString);
}
else
{
a17=_createFacesMessage(a18,
a15,
a14,
this._exampleString);
}
var a19=_createFacesMessage("org.apache.myfaces.trinidad.convert.DateTimeConverter.CONVERT_DATE_INVALID_DATE",
a15,
a14);
if(typeof a16=="string")
{
return this._simpleDateParseImpl(a14,
a16,
this._localeSymbols,
this._locale,
a17,
a19);
}
else
{
var a20;
for(a20=0;a20<a16.length;a20++)
{
try{
var a21=this._simpleDateParseImpl(a14,
a16[a20],
this._localeSymbols,
this._locale,
a17,
a19);
return a21;
}
catch(e)
{
if(e.isDateInvalid)
throw e;
if(a20==a16.length-1)
throw e;
}
}
}
}
TrDateTimeConverter.prototype._endsWith=function(
a22,
a23
)
{
var a24=a22.length-a23.length;
if(a24<0)
return false;
return(a22.lastIndexOf(a23,a24)==a24);
}
TrDateTimeConverter.prototype._initPatterns=function(
a25,a26)
{
var a27=new Array();
var a28=new Array();
if(a25)
a28=a28.concat(a25);
if(!a26)
a26=getJavaLanguage(a26);
if(!_CONVENIENCE_PATTERNS)
this._initConveniencePatterns();
var a29=_CONVENIENCE_PATTERNS[a26];
if(a29)
a28=a28.concat(a29);
var a30=a28.length;
for(var a31=0;a31<a30;a31++)
{
var a32=a28[a31];
a27[a27.length]=a32;
var a33=1;
if(a32.indexOf('MMM')!=-1)
{
a27[a27.length]=a32.replace(/MMM/g,'MM');
a27[a27.length]=a32.replace(/MMM/g,'M');
a33=3;
}
var a34=a27.length-a33;
if(a32.indexOf('/')!=-1)
{
for(var a35=a34;a35<a34+a33;a35++)
a27[a27.length]=a27[a35].replace(/\//g,'-');
for(var a35=a34;a35<a34+a33;a35++)
a27[a27.length]=a27[a35].replace(/\//g,'.');
}
else if(a32.indexOf('-')!=-1)
{
for(var a35=a34;a35<a34+a33;a35++)
a27[a27.length]=a27[a35].replace(/-/g,'/');
for(var a35=a34;a35<a34+a33;a35++)
a27[a27.length]=a27[a35].replace(/-/g,'.');
}
else if(a32.indexOf('.')!=-1)
{
for(var a35=a34;a35<a34+a33;a35++)
a27[a27.length]=a27[a35].replace(/\./g,'-');
for(var a35=a34;a35<a34+a33;a35++)
a27[a27.length]=a27[a35].replace(/\./g,'/');
}
}
return a27;
}
TrDateTimeConverter.prototype._initConveniencePatterns=function()
{
_CONVENIENCE_PATTERNS=new Object();
_CONVENIENCE_PATTERNS.en_US=["MMMM dd, yy","MMMM/dd/yy","dd-MMMM-yy"];
}
TrDateTimeConverter.prototype._simpleDateParseImpl=function(
a36,
a37,
a38,
a39,
a40,
a41)
{
if(a36==null)
return;
if(this._endsWith(a37," '"))
{
a36+=" ";
}
var a42=new Object();
a42.currIndex=0;
a42.parseString=a36;
a42.parsedHour=null;
a42.parsedMinutes=null;
a42.parsedSeconds=null;
a42.parsedMilliseconds=null;
a42.isPM=false;
a42.parsedBC=false;
a42.parsedFullYear=null;
a42.parsedMonth=null;
a42.parsedDate=null;
a42.hourOffset=null;
a42.minOffset=null;
a42.parsedDayOfYear=null;
var a43=new Date(0);
a43.setDate(1);
if(_doClumping(a37,
a38,
a39,
_subparse,
a42,
a43))
{
if(a36.length!=a42.currIndex)
{
a42.parseException=new TrConverterException(a40);
throw a42.parseException;
}
if((a42.hourOffset!=null)||
(a42.minOffset!=null))
return undefined;
var a44=a42.parsedFullYear;
if(a44!=null)
{
if(a42.parsedBC)
{
a44=_getADEra().getFullYear()-a44;
}
a43.setFullYear(a44);
a42.parsedFullYear=a44;
}
if(a42.parsedDayOfYear!=null)
{
if((a42.parsedDate==null)||(a42.parsedMonth==null))
{
var a44=(a42.parsedFullYear!=null)?a42.parsedFullYear:new Date().getFullYear();
var a45=_isLeapYear(a44)?_GREGORIAN_MONTHS_LASTDAYOFYEAR_LEAP:
_GREGORIAN_MONTHS_LASTDAYOFYEAR_NONLEAP;
var a46=0;
for(a46=0;a46<12;a46++)
{
if(a42.parsedDayOfYear<=a45[a46])
break;
}
a42.parsedMonth=a46;
if(a46==0)
a42.parsedDate=a42.parsedDayOfYear;
else
a42.parsedDate=(a42.parsedDayOfYear-a45[a46-1]);
}
}
var a47=a42.parsedMonth;
if(a47!=null)
a43.setMonth(a47);
var a48=a42.parsedDate;
if(a48!=null)
a43.setDate(a48);
var a49=a42.parsedHour;
if(a49!=null)
{
if(a42.isPM&&(a49<12))
{
a49+=12;
}
a43.setHours(a49);
a42.parsedHour=a49;
}
else
{
a43.setHours(0);
a42.parsedHour=0;
}
var a50=a42.parsedMinutes;
if(a50!=null)
a43.setMinutes(a50);
else
a43.setMinutes(0);
var a51=a42.parsedSeconds;
if(a51!=null)
a43.setSeconds(a51);
else
a43.setSeconds(0);
var a52=a42.parsedMilliseconds;
if(a52!=null)
a43.setMilliseconds(a52);
else
a43.setMilliseconds(0);
if(!_isStrict(a42,a43))
{
a42.parseException=new TrConverterException(a41);
a42.parseException.isDateInvalid=true;
throw a42.parseException;
}
if(this._offset)
{
var a53=a43.getMinutes();
a43.setMinutes((+a53)+parseInt(this._offset));
}
return a43;
}
else
{
a42.parseException=new TrConverterException(a40);
throw a42.parseException;
}
}

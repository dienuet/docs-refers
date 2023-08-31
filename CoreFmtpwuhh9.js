var _byteLenKey="org.apache.myfaces.trinidad.validator.ByteLengthValidator.MAXIMUM";
function TrByteLengthValidator(
a0,
a1
)
{
this._length=a0;
this._messages=a1;
this._class="TrByteLengthValidator";
}
TrByteLengthValidator.prototype=new TrValidator();
function CjkFormat(
a0,
a1
)
{
this._base=TrByteLengthValidator;
this._base(a0,a1);
this._class="CjkFormat";
}
CjkFormat.prototype=new TrByteLengthValidator();
CjkFormat.prototype.getHints=function(
a2
)
{
var a3=null;
if(this._messages["hint"])
{
a3=new Array();
a3.push(TrMessageFactory.createCustomMessage(
this._messages["hint"],
this._length)
);
}
return a3;
}
CjkFormat.prototype.validate=function(
a4,
a5,
a6
)
{
var a7=0;
var a8=this._length;
if(a4==null)
return;
while(a7<a4.length)
{
var a9=a4.charCodeAt(a7);
if((a9<0x80)||((0xFF60<a9)&&(a9<0xFFA0)))a8--;
else a8-=2;
if(a8<0)
{
var a10;
if(!this._messages["detail"])
{
a10=_createFacesMessage(_byteLenKey,
a5,
a4,
this._length);
}
else
{
a10=_createCustomFacesMessage(
TrMessageFactory.getSummaryString(_byteLenKey),
this._messages["detail"],
a5,
a4,
this._length);
}
throw new TrValidatorException(a10);
}
a7++;
}
return a4;
}
function Utf8Format(
a0,
a1
)
{
this._base=TrByteLengthValidator;
this._base(a0,a1);
this._class="Utf8Format";
}
Utf8Format.prototype=new TrByteLengthValidator();
Utf8Format.prototype.getHints=function(
a2
)
{
var a3=null;
if(this._messages["hint"])
{
a3=new Array();
a3.push(TrMessageFactory.createCustomMessage(
this._messages["hint"],
this._length)
);
}
return a3;
}
Utf8Format.prototype.validate=function(
a4,
a5,
a6
)
{
var a7=0;
var a8=this._length;
if(a4==null)
return null;
while(a7<a4.length)
{
var a9=a4.charCodeAt(a7);
if(a9<0x80)a8--;
else if(a9<0x800)a8-=2;
else
{
if((a9&0xF800)==0xD800)
a8-=2;
else
a8-=3;
}
if(a8<0)
{
var a10;
if(!this._messages["detail"])
{
a10=_createFacesMessage(_byteLenKey,
a5,
a4,
this._length);
}
else
{
a10=_createCustomFacesMessage(
TrMessageFactory.getSummaryString(_byteLenKey),
this._messages["detail"],
a5,
a4,
this._length);
}
throw new TrValidatorException(a10);
}
a7++;
}
return a4;
}
function SBFormat(
a0,
a1
)
{
this._base=TrByteLengthValidator;
this._base(a0,a1);
this._class="SBFormat";
}
SBFormat.prototype=new TrByteLengthValidator();
SBFormat.prototype.getHints=function(
a2
)
{
var a3=null;
if(this._messages["hint"])
{
a3=new Array();
a3.push(TrMessageFactory.createCustomMessage(
this._messages["hint"],
this._length)
);
}
return a3;
}
SBFormat.prototype.validate=function(
a4,
a5,
a6
)
{
if(a4==null)
return null;
if(this._length<a4.length)
{
var a7;
if(!this._messages["detail"])
{
a7=_createFacesMessage(_byteLenKey,
a5,
a4,
this._length);
}
else
{
a7=_createCustomFacesMessage(
TrMessageFactory.getSummaryString(_byteLenKey),
this._messages["detail"],
a5,
a4,
this._length);
}
throw new TrValidatorException(a7);
}
return a4;
}

var TrCollections=new Object();
TrCollections.removeValuesFromArray=function(
a0,
a1
)
{
if(a0&&a1)
{
for(i=0;i<a0.length;i++)
{
var a2=a0[i];
for(j=0;j<a1.length;j++)
{
if(a1[j].toLowerCase()==a2.toLowerCase())
{
a1.splice(j,1);
j--;
}
}
}
}
}

function TrNumberFormat(a0,a1,a2)
{
if(!a0)
alert("type for TrNumberFormat not defined!");
this._type=a0;
if(!a2)
{
a2={};
}
TrNumberFormat.CURRENCY_CODE="currencyCode";
TrNumberFormat.CURRENCY_SYMBOL="currencySymbol";
TrNumberFormat.NEGATIVE_PREFIX="negativePrefix";
TrNumberFormat.NEGATIVE_SUFFIX="negativeSuffix";
TrNumberFormat.IS_GROUPING_USED="isGroupingUsed";
TrNumberFormat.MAX_FRACTION_DIGITS="maxFractionDigits";
TrNumberFormat.MAX_INTEGER_DIGITS="maxIntegerDigits";
TrNumberFormat.MIN_FRACTION_DIGITS="minFractionDigits";
TrNumberFormat.MIN_INTEGER_DIGITS="minIntegerDigits";
TrNumberFormat.ROUNDING_MODE="roundingMode";
TrNumberFormat.IS_INTEGER_ONLY="isIntegerOnly";
var a3=((a2[TrNumberFormat.IS_INTEGER_ONLY])?0:a2[TrNumberFormat.MAX_FRACTION_DIGITS]);
if(a3==null)
{
if(this._type=="percent")
a3=0;
else
a3=3;
}
this.setMaximumFractionDigits(a3);
var a4=((a2[TrNumberFormat.IS_INTEGER_ONLY])?0:a2[TrNumberFormat.MIN_FRACTION_DIGITS]);
if(a4==null)
{
if(this._type=="currency")
this.setMinimumFractionDigits(2);
else
this.setMinimumFractionDigits(0);
}
this.setMinimumFractionDigits(a4);
this.setMinimumIntegerDigits((a2[TrNumberFormat.MIN_INTEGER_DIGITS]!=null)?a2[TrNumberFormat.MIN_INTEGER_DIGITS]:1);
this.setMaximumIntegerDigits((a2[TrNumberFormat.MAX_INTEGER_DIGITS]!=null)?a2[TrNumberFormat.MAX_INTEGER_DIGITS]:40);
this.setGroupingUsed((a2[TrNumberFormat.IS_GROUPING_USED]!=null)?a2[TrNumberFormat.IS_GROUPING_USED]:true);
this.setRoundingMode(a2[TrNumberFormat.ROUNDING_MODE]);
this._updateLocaleAndSymbols(a1,a2);
}
TrNumberFormat.getNumberInstance=function(a5,a6)
{
return new TrNumberFormat("number",a5,a6);
}
TrNumberFormat.getCurrencyInstance=function(a7,a8)
{
return new TrNumberFormat("currency",a7,a8);
}
TrNumberFormat.getPercentInstance=function(a9,a10)
{
return new TrNumberFormat("percent",a9,a10);
}
TrNumberFormat.prototype.setGroupingUsed=function(a11)
{
this._groupingUsed=a11;
}
TrNumberFormat.prototype.isGroupingUsed=function()
{
return this._groupingUsed;
}
TrNumberFormat.prototype.setRoundingMode=function(a12)
{
this._roundingMode=a12;
}
TrNumberFormat.prototype.getRoundingMode=function()
{
return this._roundingMode;
}
TrNumberFormat.prototype.isRoundingModeSpecified=function()
{
return this.getRoundingMode()!=null;
}
TrNumberFormat.prototype.setMaximumIntegerDigits=function(a13)
{
if(a13!=null)
{
this._maxIntegerDigits=a13<0?0:a13;
if(this._minIntegerDigits>this._maxIntegerDigits)
{
this._minIntegerDigits=this._maxIntegerDigits;
}
}
}
TrNumberFormat.prototype.getMaximumIntegerDigits=function()
{
return this._maxIntegerDigits;
}
TrNumberFormat.prototype.setMaximumFractionDigits=function(a14)
{
if(a14!=null)
{
this._maxFractionDigits=a14<0?0:a14;
if(this._maxFractionDigits<this._minFractionDigits)
{
this._minFractionDigits=this._maxFractionDigits;
}
this._isMaxFractionDigitsSet=true;
}
}
TrNumberFormat.prototype.getMaximumFractionDigits=function()
{
return this._maxFractionDigits;
}
TrNumberFormat.prototype.setMinimumIntegerDigits=function(a15)
{
if(a15!=null)
{
this._minIntegerDigits=a15<0?0:a15;
if(this._minIntegerDigits>this._maxIntegerDigits)
{
this._maxIntegerDigits=this._minIntegerDigits;
}
}
}
TrNumberFormat.prototype.getMinimumIntegerDigits=function()
{
return this._minIntegerDigits;
}
TrNumberFormat.prototype.setMinimumFractionDigits=function(a16)
{
if(a16!=null)
{
this._minFractionDigits=a16<0?0:a16;
if(this._maxFractionDigits<this._minFractionDigits)
{
this._maxFractionDigits=this._minFractionDigits;
}
}
}
TrNumberFormat.prototype.getMinimumFractionDigits=function()
{
return this._minFractionDigits;
}
TrNumberFormat.prototype.format=function(a17)
{
if(this._type=="percent")
return this.percentageToString(a17);
else if(this._type=="currency")
return this.currencyToString(a17);
else if(this._type=="number")
return this.numberToString(a17);
}
TrNumberFormat.prototype.parse=function(a18)
{
if(this._type=="percent")
return this.stringToPercentage(a18);
else if(this._type=="currency")
return this.stringToCurrency(a18);
return this.stringToNumber(a18);
}
TrNumberFormat.prototype.stringToNumber=function(a19)
{
var a20=this.hasPrefixOrSuffix(a19);
var a21=1;
if(a20)
{
var a22=this.removePrefixAndSuffix(a19);
a19=a22[0]
var a23=a22[1];
if(!a23)
a21=-1;
}
if(isNaN(a19)||a19.indexOf('e')!=-1||a19.indexOf('E')!=-1)
{
throw new TrParseException("not able to parse number");
}
return parseFloat(a19)*a21;
}
TrNumberFormat.prototype.hasPrefixOrSuffix=function(a24)
{
var a25=a24.indexOf(this._nPrefix);
var a26=this._nSuffix;
if(a26&&(a26.charAt(0)==' '||a26.charAt(0)=='\xa0'))
{
a26=a26.substring(1);
}
var a27=a24.indexOf((a26=="")?null:a26);
if(a25==0||a27!=-1)
{
return true;
}
else
{
var a28=a24.indexOf((this._pPrefix=="")?null:this._pPrefix);
var a29=this._pSuffix;
if(a29&&(a29.charAt(0)==' '||a29.charAt(0)=='\xa0'))
{
a29=a29.substring(1);
}
var a30=a24.indexOf((a29=="")?null:a29);
if(a28==0||a30!=-1)
{
return true;
}
}
return false;
}
TrNumberFormat.prototype.stringToCurrency=function(a31)
{
return this.stringToNumber(a31);
}
TrNumberFormat.prototype.removePrefixAndSuffix=function(a32)
{
var a33=[];
var a34=a32.indexOf(this._nPrefix);
var a35=this._nSuffix;
if(a35&&(a35.charAt(0)==' '||a35.charAt(0)=='\xa0'))
{
a35=a35.substring(1);
}
var a36=a32.indexOf(a35);
if(a34!=-1&&a36!=-1)
{
a33.push(a32.substr(this._nPrefix.length,a32.length-(this._nPrefix.length+a35.length)));
a33.push(false);
return a33;
}
else if(a34!=-1)
{
a33.push(a32.substr(this._nPrefix.length));
a33.push(false);
return a33;
}
else
{
var a37=a32.indexOf(this._pPrefix);
var a38=this._pSuffix;
if(a38&&(a38.charAt(0)==' '||a38.charAt(0)=='\xa0'))
{
a38=a38.substring(1);
}
var a39=a32.indexOf(a38);
if(a37!=-1&&a39!=-1)
{
a33.push(a32.substr(this._pPrefix.length,a32.length-(this._pPrefix.length+a38.length)));
a33.push(true);
return a33;
}
else if(a37!=-1)
{
a33.push(a32.substr(this._pPrefix.length));
a33.push(true);
return a33;
}
else
{
throw new TrParseException("not able to parse number");
}
}
}
TrNumberFormat.prototype.stringToPercentage=function(a40)
{
var a41=this._localeSymbols.getPercentSuffix().trim();
if(!a41)
a41=this._localeSymbols.getPercentPrefix().trim();
var a42=(a40.indexOf(a41)!=-1);
if(!a42)
{
throw new TrParseException("not able to parse number");
}
var a43=a40.replace(new RegExp(a41,'g'),'');
return this.stringToNumber(a43);
}
TrNumberFormat.prototype.numberToString=function(a44,a45,a46)
{
var a47=a44<0;
if(a47)
a44=(a44*-1);
var a48=a44+"";
a48=TrNumberFormat.scientificToExpanded(a48);
var a49=a48.indexOf(".");
var a50=a48.length;
var a51;
var a52;
if(a49!=-1)
{
a51=a48.substring(0,a49);
a52=a48.substring(a49+1,a50);
}
else
{
a51=a48;
a52="";
}
a51=this._formatIntegers(a51);
a52=this._formatFractions(a52)
var a53=this._localeSymbols.getDecimalSeparator();
if(a52!="")
a48=(a51+a53+a52);
else
a48=(a51);
if(a45)
{
a48=a48+a45;
}
else if(a46)
{
a48=a46+a48;
}
if(a47)
{
if(this._nPrefix||this._nSuffix)
{
a48=this.addPrefixAndSuffix(a48,false);
}
else
{
a48="-"+a48;
}
}
else
{
if(this._pPrefix||this._pSuffix)
{
a48=this.addPrefixAndSuffix(a48,true);
}
}
return a48;
}
TrNumberFormat.prototype.addPrefixAndSuffix=function(a54,a55)
{
if(a55)
{
return((this._pPrefix)?this._pPrefix:'')+a54+((this._pSuffix)?this._pSuffix:'');
}
else
{
return((this._nPrefix)?this._nPrefix:'')+a54+((this._nSuffix)?this._nSuffix:'');
}
}
TrNumberFormat.prototype.currencyToString=function(a56)
{
return this.numberToString(a56);
}
TrNumberFormat.prototype.percentageToString=function(a57)
{
a57=this.moveDecimalRight(a57);
if((this._isMaxFractionDigitsSet==null||(this._isMaxFractionDigitsSet&&this.getMaximumFractionDigits()==0))&&
!this.isRoundingModeSpecified())
a57=this.getRounded(a57);
if(isNaN(a57))
{
throw new TrParseException("not able to parse number");
}
var a58=this._localeSymbols.getPercentSuffix();
var a59=this._localeSymbols.getPercentPrefix();
if((!a58||a58=="")&&(!a59||a59==""))
{
throw new TrParseException("suffix AND prefix are undefined, require at least one to be not null");
}
return this.numberToString(a57,a58,a59);
}
TrNumberFormat.scientificToExpanded=function(a60)
{
var a61=a60.indexOf('e');
if(a61==-1)
return a60;
var a62="";
if(a60.charAt(0)=='-')
{
a62="-";
a60=a60.substring(1);
a61-=1;
}
var a63=a60.charAt(a61+1)=='+';
var a64=parseInt(a60.substring(a61+2));
var a65=Math.max(0,a61-2);
var a66="";
if(a63)
{
for(var a67=0;a67<a64-a65;++a67)
a66+="0";
return a62+a60.charAt(0)+a60.substring(2,a61)+a66;
}
for(var a67=0;a67<a64-1;++a67)
a66+="0";
return a62+"0."+a66+a60.charAt(0)+a60.substring((a65==0)?1:2,a61);
}
TrNumberFormat.trimLeadingZeroes=function(a68)
{
var a69=[];
var a70,ch;
for(a70=0;a70<a68.length;++a70)
{
ch=a68.charAt(a70);
if((ch>='1'&&ch<='9')||ch=='.')
break;
if(ch=='0'&&a70+1<a68.length&&a68.charAt(a70+1)!='.')
continue;
a69.push(ch);
}
return a69.join('')+a68.substring(a70);
}
TrNumberFormat.prototype.getRounded=function(a71)
{
a71=this.moveDecimalRight(a71);
a71=Math.round(a71);
a71=this.moveDecimalLeft(a71);
return a71;
}
TrNumberFormat.prototype.moveDecimalRight=function(a72)
{
var a73='';
a73=this.moveDecimal(a72,false);
return a73;
}
TrNumberFormat.prototype.moveDecimalLeft=function(a74)
{
var a75='';
a75=this.moveDecimal(a74,true);
return a75;
}
TrNumberFormat.prototype.moveDecimal=function(a76,a77)
{
var a78='';
a78=this.moveDecimalAsString(a76,a77);
return parseFloat(a78);
}
TrNumberFormat.prototype.moveDecimalAsString=function(a79,a80)
{
var a81=2;
if(a81<=0)
return a79;
var a82=a79+'';
var a83=this.getZeros(a81);
var a84=new RegExp('([0-9.]+)');
if(a80)
{
a82=a82.replace(a84,a83+'$1');
var a85=new RegExp('(-?)([0-9]*)([0-9]{'+a81+'})(\\.?)');
a82=a82.replace(a85,'$1$2.$3');
}
else
{
var a86=a84.exec(a82);
if(a86!=null)
{
a82=a82.substring(0,a86.index)+a86[1]+a83+a82.substring(a86.index+a86[0].length);
}
var a85=new RegExp('(-?)([0-9]*)(\\.?)([0-9]{'+a81+'})');
a82=a82.replace(a85,'$1$2$4.');
}
a82=a82.replace(/\.$/,'');
return a82;
}
TrNumberFormat.prototype.getZeros=function(a87)
{
var a88='';
var a89;
for(a89=0;a89<a87;a89++){
a88+='0';
}
return a88;
}
TrNumberFormat.prototype._updateLocaleAndSymbols=function(a90,a91)
{
var a92=(a91)?a91[TrNumberFormat.CURRENCY_CODE]:null;
var a93=(a91)?a91[TrNumberFormat.CURRENCY_SYMBOL]:null;
var a94=(a91)?a91[TrNumberFormat.NEGATIVE_PREFIX]:null;
var a95=(a91)?a91[TrNumberFormat.NEGATIVE_SUFFIX]:null;
this._localeSymbols=getLocaleSymbols(a90);
if(this._type=="percent"||this._type=="number")
{
this._nPrefix=(a94)?a94:null;
this._nSuffix=(a95)?a95:null;
this._pPrefix=null;;
this._pSuffix=null;
}
else
{
this._pPrefix=this._localeSymbols.getPositivePrefix();
this._pSuffix=this._localeSymbols.getPositiveSuffix();
var a96=this._localeSymbols.getNegativePrefix();
var a97=this._localeSymbols.getNegativeSuffix();
var a98=this._localeSymbols.getCurrencySymbol();
this._nPrefix=this._replaceFormattingPrefixAndSuffix(a96,a98,a94,true);
this._nSuffix=this._replaceFormattingPrefixAndSuffix(a97,a98,a95,false);
if(a92)
{
var a99=this._localeSymbols.getCurrencyCode();
if(a99!=a92)
{
this._replaceCurrencyPrefixAndSuffix(a98,a92);
}
}
else if(a93)
{
this._replaceCurrencyPrefixAndSuffix(a98,a93);
}
}
}
TrNumberFormat.prototype._replaceCurrencyPrefixAndSuffix=function(a100,a101)
{
this._pPrefix=this._pPrefix.replace(a100,a101);
this._pSuffix=this._pSuffix.replace(a100,a101);
this._nPrefix=this._nPrefix.replace(a100,a101);
this._nSuffix=this._nSuffix.replace(a100,a101);
}
TrNumberFormat.prototype._replaceFormattingPrefixAndSuffix=function(
a102,
a103,
a104,
a105)
{
var a106=a102;
if(a104)
{
var a107=a102.trim().indexOf(a103);
if(a107==-1)
{
a106=a104;
}
else
{
if(a102.trim()==a103)
{
a106=(a105)?a104+a102:a102+a104;
}
else if(a107==0)
{
var a108=a102.indexOf(a103);
a106=a102.substring(0,a108)+(a103+a104);
}
else
{
var a109=a103.length;
if(a102.trim().length==a109+a107)
{
var a108=a102.indexOf(a103);
a106=(a104+a103)+a102.substring(a108+a109,a102.length);
}
else
{
a106=a104+a103;
}
}
}
}
return a106;
}
TrNumberFormat.prototype._formatIntegers=function(a110)
{
var a111=a110.length;
var a112=this.getMaximumIntegerDigits();
var a113=this.getMinimumIntegerDigits();
var a114;
if(a111>a112)
{
a114=a111-a112;
a110=a110.substring(a114,a111);
}
else if(a111<a113)
{
a114=a113-a111;
var a115="";
while(a114>0)
{
a115="0"+a115;
--a114;
}
a110=a115+a110;
}
if(this.isGroupingUsed())
{
a110=this._addGroupingSeparators(a110);
}
return a110;
}
TrNumberFormat.prototype._formatFractions=function(a116)
{
var a117=a116.length;
var a118=this.getMaximumFractionDigits();
var a119=this.getMinimumFractionDigits();
if(a117>a118&&a118>=a119)
{
var a120=(this.isRoundingModeSpecified())?a117:a118;
a116=a116.substring(0,a120);
}
if(a117<a119)
{
var a121=a119-a117;
while(a121>0)
{
a116=a116+"0";
--a121;
}
}
return a116;
}
TrNumberFormat.prototype._addGroupingSeparators=function(a122)
{
var a123=a122.length;
var a124=a123%3;
var a125;
var a126;
var a127="";
var a128=this._localeSymbols.getGroupingSeparator();
if(a124>0)
{
a125=(a123<4)?a122.substring(0,a124):a122.substring(0,a124)+a128;
a126=a122.substring(a124,a123);
}
else
{
a125="";
a126=a122;
}
for(i=0;i<a126.length;i++)
{
if(i%3==0&&i!=0)
{
a127+=a128;
}
a127+=a126.charAt(i);
}
a122=a125+a127;
return a122;
}
function TrParseException(
a0
)
{
this._message=a0;
}
TrParseException.prototype.getMessage=function()
{
return this._message;
}

function TrNumberConverter(
a0,
a1,
a2,
a3,
a4,
a5,
a6,
a7,
a8,
a9,
a10,
a11,
a12,
a13,
a14,
a15)
{
this._pattern=a0;
this._type=a1;
this._locale=a2;
this._messages=a3;
this._isDisabled=a4;
this._currencyCode=a7;
this._currencySymbol=a8;
this._maxFractionDigits=a9;
this._maxIntegerDigits=a10;
this._minFractionDigits=a11;
this._minIntegerDigits=a12;
this._negativePrefix=a13;
this._negativeSuffix=a14;
this._roundingMode=a15;
if(a5!==undefined)
this._integerOnly=a5;
else
this._integerOnly=false;
if(a6!==undefined)
this._groupingUsed=a6;
else
this._groupingUsed=true;
this._initNumberFormat(a2,a7,a8,a13,a14);
this._class="TrNumberConverter";
TrNumberConverter.ROUND_UP="UP";
TrNumberConverter.ROUND_DOWN="DOWN";
TrNumberConverter.ROUND_CEILING="CEILING";
TrNumberConverter.ROUND_FLOOR="FLOOR";
TrNumberConverter.ROUND_HALF_UP="HALF_UP";
TrNumberConverter.ROUND_HALF_DOWN="HALF_DOWN";
TrNumberConverter.ROUND_HALF_EVEN="HALF_EVEN";
TrNumberConverter.ROUND_UNNECESSARY="UNNECESSARY";
}
TrNumberConverter.prototype=new TrConverter();
TrNumberConverter.prototype.setCurrencyCode=function(a16)
{
this._currencyCode=a16;
}
TrNumberConverter.prototype.getCurrencyCode=function()
{
return this._currencyCode;
}
TrNumberConverter.prototype.setCurrencySymbol=function(a17)
{
this._currencySymbol=a17;
}
TrNumberConverter.prototype.getCurrencySymbol=function()
{
return this._currencySymbol;
}
TrNumberConverter.prototype.setMaxFractionDigits=function(a18)
{
this._maxFractionDigits=a18;
}
TrNumberConverter.prototype.getMaxFractionDigits=function()
{
return this._maxFractionDigits;
}
TrNumberConverter.prototype.setMaxIntegerDigits=function(a19)
{
this._maxIntegerDigits=a19;
}
TrNumberConverter.prototype.getMaxIntegerDigits=function()
{
return this._maxIntegerDigits;
}
TrNumberConverter.prototype.setMinFractionDigits=function(a20)
{
this._minFractionDigits=a20;
}
TrNumberConverter.prototype.getMinFractionDigits=function()
{
return this._minFractionDigits;
}
TrNumberConverter.prototype.setMinIntegerDigits=function(a21)
{
this._minIntegerDigits=a21;
}
TrNumberConverter.prototype.getMinIntegerDigits=function()
{
return this._minIntegerDigits;
}
TrNumberConverter.prototype.setNegativePrefix=function(a22)
{
this._negativePrefix=a22;
}
TrNumberConverter.prototype.getNegativePrefix=function()
{
return this._negativePrefix;
}
TrNumberConverter.prototype.setNegativeSuffix=function(a23)
{
this._negativeSuffix=a23;
}
TrNumberConverter.prototype.getNegativeSuffix=function()
{
return this._negativeSuffix;
}
TrNumberConverter.prototype.isDisabled=function()
{
return this._isDisabled;
}
TrNumberConverter.prototype.setGroupingUsed=function(a24)
{
this._groupingUsed=a24;
}
TrNumberConverter.prototype.isGroupingUsed=function()
{
return this._groupingUsed;
}
TrNumberConverter.prototype.setIntegerOnly=function(a25)
{
this._integerOnly=a25;
}
TrNumberConverter.prototype.isIntegerOnly=function()
{
return this._integerOnly;
}
TrNumberConverter.prototype.setRoundingMode=function(a26)
{
this._roundingMode=a26;
}
TrNumberConverter.prototype.getRoundingMode=function()
{
return this._roundingMode;
}
TrNumberConverter.prototype.getFormatHint=function()
{
if(this._messages&&this._messages["hintPattern"])
{
return TrMessageFactory.createCustomMessage(
this._messages["hintPattern"],
this._pattern);
}
else
{
if(this._pattern)
{
return TrMessageFactory.createMessage(
"org.apache.myfaces.trinidad.convert.NumberConverter.FORMAT_HINT",
this._pattern);
}
else
{
return null;
}
}
}
TrNumberConverter.prototype.getAsString=function(
a27,
a28
)
{
if(this.isDisabled())
return a27;
if(this._isConvertible())
{
if(this._type=="percent"||this._type=="currency")
{
return this._numberFormat.format(a27);
}
else
{
if(typeof a27==="string")
{
return this._numberFormat.format(parseFloat(a27));
}
else
{
var a29=(this._allowClientRounding())?a27.toFixed(this._numberFormat.getMaximumFractionDigits()):a27;
return this._numberFormat.format(parseFloat(a29));
}
}
}
else
{
return undefined;
}
}
TrNumberConverter.prototype.getAsObject=function(
a30,
a31
)
{
if(this.isDisabled())
return a30;
a30=TrFormatUtils.trim(a30);
if(this._isConvertible(a30))
{
if(a30==null)
return null;
if(a30.length==0)
return null
var a32;
var a33=getLocaleSymbols(this._locale);
var a34=false;
var a35=this._numberFormat.hasPrefixOrSuffix(a30);
try
{
if(a35)
{
var a36=this._numberFormat.removePrefixAndSuffix(a30);
a30=a36[0];
a34=a36[1];
}
var a37=a33.getGroupingSeparator();
if(a37=="\xa0")
{
var a38=new RegExp("\\ ","g");
a30=a30.replace(a38,"\xa0");
}
var a39=new RegExp("\\"+a37,"g");
a30=a30.replace(a39,"");
var a40=a33.getDecimalSeparator();
var a41=new RegExp("\\"+a40,"g");
a30=a30.replace(a41,".");
if(a35)
{
a30=this._numberFormat.addPrefixAndSuffix(a30,a34);
}
a30=TrNumberFormat.scientificToExpanded(this._numberFormat.parse(a30)+"");
}
catch(e)
{
try
{
var a42=TrNumberFormat.getNumberInstance();
a42.setMinimumIntegerDigits(this._minIntegerDigits);
a42.setMaximumIntegerDigits(this._maxIntegerDigits);
a42.setMinimumFractionDigits(this._minFractionDigits);
a42.setMaximumFractionDigits(this._maxFractionDigits);
a30=TrNumberFormat.scientificToExpanded(a42.parse(a30)+"");
}
catch(e)
{
var a43;
var a44=this._numberFormat.format(this._example);
var a45="org.apache.myfaces.trinidad.convert.NumberConverter.CONVERT_"+this._type.toUpperCase();
if(this._messages&&this._messages[this._type])
{
a43=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a45),this._messages[this._type],a31,a30,a44);
}
else
{
a43=_createFacesMessage(a45,a31,a30,a44);
}
throw new TrConverterException(a43);
}
}
var a46=new RegExp("\\"+".","g");
a30=a30.replace(a46,getLocaleSymbols().getDecimalSeparator());
a32=_decimalParse(a30,
this._messages,
"org.apache.myfaces.trinidad.convert.NumberConverter",
null,
null,
null,
null,
a31,
!this.isIntegerOnly());
var a47=(this._allowClientRounding())?a32.toFixed(this._numberFormat.getMaximumFractionDigits()):a32;
a32=parseFloat(a47);
if(this._type=="percent")
{
a32=this._numberFormat.moveDecimalLeft(a32);
}
return a32;
}
else
{
return undefined;
}
}
TrNumberConverter.prototype._isConvertible=function(a48)
{
if(this._pattern!=null)
return false;
return TrFormatUtils.isNumberConvertible(a48);
}
TrNumberConverter.prototype._allowClientRounding=function()
{
return this._roundingMode==null||this._roundingMode==TrNumberConverter.ROUND_HALF_UP;
}
TrNumberConverter.prototype._initNumberFormat=function(
a49,
a50,
a51,
a52,
a53)
{
var a54={
"currencyCode":a50,
"currencySymbol":a51,
"negativePrefix":a52,
"negativeSuffix":a53,
"isGroupingUsed":this.isGroupingUsed(),
"maxFractionDigits":this.getMaxFractionDigits(),
"maxIntegerDigits":this.getMaxIntegerDigits(),
"minFractionDigits":this.getMinFractionDigits(),
"minIntegerDigits":this.getMinIntegerDigits(),
"roundingMode":this.getRoundingMode(),
"isIntegerOnly":this.isIntegerOnly()
};
if(this._type=="percent")
{
this._example=0.3423;
this._numberFormat=TrNumberFormat.getPercentInstance(a49,a54);
}
else if(this._type=="currency")
{
this._example=10250;
this._numberFormat=TrNumberFormat.getCurrencyInstance(a49,a54);
}
else if(this._type=="number")
{
this._numberFormat=TrNumberFormat.getNumberInstance(a49,a54);
}
}

function TrIntegerConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrIntegerConverter";
}
TrIntegerConverter.prototype=new TrConverter();
TrIntegerConverter.prototype.getFormatHint=function()
{
return null;
}
TrIntegerConverter.prototype.getAsString=function(
a5,
a6
)
{
return""+a5;
}
TrIntegerConverter.prototype.getAsObject=function(
a7,
a8
)
{
return _decimalParse(a7,
this._message,
"org.apache.myfaces.trinidad.convert.IntegerConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a8,
null);
}
function TrLongConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrLongConverter";
}
TrLongConverter.prototype=new TrConverter();
TrLongConverter.prototype.getFormatHint=function()
{
return null;
}
TrLongConverter.prototype.getAsString=function(
a5,
a6
)
{
return""+a5;
}
TrLongConverter.prototype.getAsObject=function(
a7,
a8
)
{
if(TrFormatUtils.isNumberConvertible(a7))
{
return _decimalParse(a7,
this._message,
"org.apache.myfaces.trinidad.convert.LongConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a8,
null);
}
else
{
return undefined;
}
}
function TrShortConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrShortConverter";
}
TrShortConverter.prototype=new TrConverter();
TrShortConverter.prototype.getFormatHint=function()
{
return null;
}
TrShortConverter.prototype.getAsString=function(
a5,
a6
)
{
return""+a5;
}
TrShortConverter.prototype.getAsObject=function(
a7,
a8
)
{
return _decimalParse(a7,
this._message,
"org.apache.myfaces.trinidad.convert.ShortConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a8,
null);
}
function TrByteConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrByteConverter";
}
TrByteConverter.prototype=new TrConverter();
TrByteConverter.prototype.getFormatHint=function()
{
return null;
}
TrByteConverter.prototype.getAsString=function(
a5,
a6
)
{
return""+a5;
}
TrByteConverter.prototype.getAsObject=function(
a7,
a8
)
{
return _decimalParse(a7,
this._message,
"org.apache.myfaces.trinidad.convert.ByteConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a8,
null);
}
function TrDoubleConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrDoubleConverter";
}
TrDoubleConverter.prototype=new TrConverter();
TrDoubleConverter.prototype.getFormatHint=function()
{
return null;
}
TrDoubleConverter.prototype.getAsString=function(
a5,
a6
)
{
var a7=""+a5;
var a8=a7.indexOf(".");
if(a8!=-1)
return a7;
else
return""+a5.toFixed(1);
}
TrDoubleConverter.prototype.getAsObject=function(
a9,
a10
)
{
return _decimalParse(a9,
this._message,
"org.apache.myfaces.trinidad.convert.DoubleConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a10,
true,
true);
}
function TrFloatConverter(
a0,
a1,
a2,
a3,
a4)
{
this._message=a0;
this._maxPrecision=a1;
this._maxScale=a2;
this._maxValue=a3;
this._minValue=a4;
this._class="TrFloatConverter";
}
TrFloatConverter.prototype=new TrConverter();
TrFloatConverter.prototype.getFormatHint=function()
{
return null;
}
TrFloatConverter.prototype.getAsString=function(
a5,
a6
)
{
var a7=""+a5;
var a8=a7.indexOf(".");
if(a8!=-1)
return a7;
else
return""+a5.toFixed(1);
}
TrFloatConverter.prototype.getAsObject=function(
a9,
a10
)
{
return _decimalParse(a9,
this._message,
"org.apache.myfaces.trinidad.convert.FloatConverter",
this._maxPrecision,
this._maxScale,
this._maxValue,
this._minValue,
a10,
true,
true);
}
function TrRangeValidator(
a0,
a1,
a2,
a3)
{
this._maxValue=a0;
this._minValue=a1;
this._messages=a2;
this._isDisabled=a3;
this._class="TrRangeValidator";
}
TrRangeValidator.prototype=new TrValidator();
TrRangeValidator.prototype.getHints=function(
a4
)
{
if(this.isDisabled())
return null;
return _returnRangeHints(
this._messages,
this._maxValue,
this._minValue,
"org.apache.myfaces.trinidad.validator.RangeValidator.MAXIMUM_HINT",
"org.apache.myfaces.trinidad.validator.RangeValidator.MINIMUM_HINT",
"org.apache.myfaces.trinidad.validator.RangeValidator.RANGE_HINT",
"hintMax",
"hintMin",
"hintRange"
);
}
TrRangeValidator.prototype.isDisabled=function()
{
return this._isDisabled;
}
TrRangeValidator.prototype.validate=function(
a5,
a6,
a7
)
{
if(a5==null||this.isDisabled())
return null;
string=""+a5;
var a8=string.length;
if(a8==0)
return null;
numberValue=parseFloat(string);
var a9;
if(this._minValue!=null&&this._maxValue!=null)
{
if(numberValue>=this._minValue&&numberValue<=this._maxValue)
{
return string;
}
else
{
var a10="org.apache.myfaces.trinidad.validator.LongRangeValidator.NOT_IN_RANGE";
if(this._messages&&this._messages["range"])
{
a9=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a10),
this._messages["range"],
a6,
string,
""+this._minValue,
""+this._maxValue);
}
else
{
a9=_createFacesMessage(a10,
a6,
string,
""+this._minValue,
""+this._maxValue);
}
}
}
else
{
if(this._minValue!=null)
{
if(numberValue>=this._minValue)
{
return string;
}
else
{
var a10="org.apache.myfaces.trinidad.validator.LongRangeValidator.MINIMUM";
if(this._messages&&this._messages["min"])
{
a9=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a10),
this._messages["min"],
a6,
string,
""+this._minValue);
}
else
{
a9=_createFacesMessage(a10,
a6,
string,
""+this._minValue);
}
}
}
else
{
if(this._maxValue==null||numberValue<=this._maxValue)
{
return string;
}
else
{
var a10="org.apache.myfaces.trinidad.validator.LongRangeValidator.MAXIMUM";
if(this._messages&&this._messages["max"])
{
a9=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a10),
this._messages["max"],
a6,
string,
""+this._maxValue);
}
else
{
a9=_createFacesMessage(a10,
a6,
string,
""+this._maxValue);
}
}
}
}
throw new TrConverterException(a9);
}
function TrLengthValidator(
a0,
a1,
a2,
a3)
{
this._maxValue=a0;
this._minValue=a1;
this._messages=a2;
this._isDisabled=a3;
this._class="TrLengthValidator";
}
TrLengthValidator.prototype=new TrValidator();
TrLengthValidator.prototype.getHints=function(
a4
)
{
if(this.isDisabled())
return null;
var a5=this._minValue;
if(this._maxValue!=null&&this._minValue!=null&&this._minValue==0)
{
a5=null;
}
return _returnRangeHints(
this._messages,
this._maxValue,
a5,
"org.apache.myfaces.trinidad.validator.LengthValidator.MAXIMUM_HINT",
"org.apache.myfaces.trinidad.validator.LengthValidator.MINIMUM_HINT",
(this._minValue==this._maxValue)
?"org.apache.myfaces.trinidad.validator.LengthValidator.EXACT_HINT"
:"org.apache.myfaces.trinidad.validator.LengthValidator.RANGE_HINT",
"hintMax",
"hintMin",
"hintRange"
);
}
TrLengthValidator.prototype.isDisabled=function()
{
return this._isDisabled;
}
TrLengthValidator.prototype.validate=function(
a6,
a7,
a8
)
{
if(this.isDisabled()||a6==null)
return null;
var a9=""+a6;
var a10=a9.length;
if(a10==0)
return null;
if(a10>=this._minValue&&
((this._maxValue==null)||(a10<=this._maxValue)))
{
return a9;
}
else
{
if((this._minValue>0)&&(this._maxValue!=null))
{
var a11=(this._minValue==this._maxValue);
var a12=a11
?"org.apache.myfaces.trinidad.validator.LengthValidator.EXACT"
:"org.apache.myfaces.trinidad.validator.LengthValidator.NOT_IN_RANGE";
var a13;
var a14="range";
if(this._messages&&this._messages[a14])
{
a13=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a12),
this._messages[a14],
a7,
a9,
""+this._minValue,
""+this._maxValue);
}
else
{
a13=_createFacesMessage(a12,
a7,
a9,
""+this._minValue,
""+this._maxValue);
}
throw new TrConverterException(a13);
}
else if(a10<this._minValue)
{
var a12="org.apache.myfaces.trinidad.validator.LengthValidator.MINIMUM";
var a13;
if(this._messages&&this._messages["min"])
{
a13=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a12),
this._messages["min"],
a7,
a9,
""+this._minValue);
}
else
{
a13=_createFacesMessage(a12,
a7,
a9,
""+this._minValue);
}
throw new TrConverterException(a13);
}
else
{
var a12="org.apache.myfaces.trinidad.validator.LengthValidator.MAXIMUM";
var a13;
if(this._messages&&this._messages["max"])
{
a13=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a12),
this._messages["max"],
a7,
a9,
""+this._maxValue);
}
else
{
a13=_createFacesMessage(a12,
a7,
a9,
""+this._maxValue);
}
throw new TrConverterException(a13);
}
}
}
function TrDateTimeRangeValidator(
a0,
a1,
a2,
a3,
a4,
a5
)
{
this._maxValue=a0;
this._maxISODate=a3;
this._minValue=a1;
this._minISODate=a4;
this._messages=a2;
this._isDisabled=a5;
this._class="TrDateTimeRangeValidator";
}
TrDateTimeRangeValidator.prototype=new TrValidator();
TrDateTimeRangeValidator.prototype.getHints=function(
a6
)
{
if(this.isDisabled())
return null;
var a7=null;
var a8=null;
if(this._maxValue)
a7=this._maxValue;
if(this._minValue)
a8=this._minValue;
return _returnRangeHints(
this._messages,
a7,
a8,
"org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.MAXIMUM_HINT",
"org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.MINIMUM_HINT",
"org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.RANGE_HINT",
"hintMax",
"hintMin",
"hintRange"
);
}
TrDateTimeRangeValidator.prototype.isDisabled=function()
{
return this._isDisabled;
}
TrDateTimeRangeValidator.prototype.validate=function(
a9,
a10,
a11
)
{
if(this.isDisabled()||a9==null)
return null;
dateTime=a9.getTime();
var a12;
var a13=this._getISOConverter();
if(this._minValue&&this._maxValue)
{
try
{
minDate=(this._minISODate==null)?
a11.getAsObject(this._minValue).getTime():
a13.getAsObject(this._minISODate).getTime();
maxDate=(this._maxISODate==null)?
a11.getAsObject(this._maxValue).getTime():
a13.getAsObject(this._maxISODate).getTime();
}
catch(e)
{
return a9;
}
if(dateTime>=minDate&&dateTime<=maxDate)
{
return a9;
}
else
{
var a14="org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.NOT_IN_RANGE";
if(this._messages&&this._messages["range"])
{
a12=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a14),
this._messages["range"],
a10,
""+a11.getAsString(a9),
""+this._minValue,
""+this._maxValue);
}
else
{
a12=_createFacesMessage(a14,
a10,
""+a11.getAsString(a9),
""+this._minValue,
""+this._maxValue);
}
}
}
else
{
if(this._minValue)
{
try
{
minDate=(this._minISODate==null)?
a11.getAsObject(this._minValue).getTime():
a13.getAsObject(this._minISODate).getTime();
}
catch(e)
{
return a9;
}
if(dateTime>=minDate)
{
return a9;
}
else
{
var a14="org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.MINIMUM";
if(this._messages&&this._messages["min"])
{
a12=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a14),
this._messages["min"],
a10,
""+a11.getAsString(a9),
""+this._minValue);
}
else
{
a12=_createFacesMessage(a14,
a10,
""+a11.getAsString(a9),
""+this._minValue);
}
}
}
else if(this._maxValue)
{
try
{
maxDate=(this._maxISODate==null)?
a11.getAsObject(this._maxValue).getTime():
a13.getAsObject(this._maxISODate).getTime();
}
catch(e)
{
return a9;
}
if(dateTime<=maxDate)
{
return a9;
}
else
{
var a14="org.apache.myfaces.trinidad.validator.DateTimeRangeValidator.MAXIMUM";
if(this._messages&&this._messages["max"])
{
a12=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a14),
this._messages["max"],
a10,
""+a11.getAsString(a9),
""+this._maxValue);
}
else
{
a12=_createFacesMessage(a14,
a10,
""+a11.getAsString(a9),
""+this._maxValue);
}
}
}
else
{
return a9;
}
}
throw new TrConverterException(a12);
}
TrDateTimeRangeValidator.prototype._getISOConverter=function()
{
if(this._ISO_CONVERTER==null)
this._ISO_CONVERTER=new TrDateTimeConverter("yyyy-MM-dd HH:mm:ss",null,null,null,null);
return this._ISO_CONVERTER;
}
function TrDateRestrictionValidator(
a0,
a1,
a2,
a3)
{
this._weekdaysValue=a0;
this._monthValue=a1;
this._messages=a2;
this._weekdaysMap={'2':'tue','4':'thu','6':'sat','1':'mon','3':'wed','5':'fri','0':'sun'};
this._translatedWeekdaysMap={'sun':'0','mon':'1','tue':'2','wed':'3','thu':'4','fri':'5','sat':'6'};
this._monthMap={'2':'mar','4':'may','9':'oct','8':'sep','11':'dec','6':'jul','1':'feb','3':'apr','10':'nov','7':'aug','5':'jun','0':'jan'};
this._translatedMonthMap={'jan':'0','feb':'1','mar':'2','apr':'3','may':'4','jun':'5','jul':'6','aug':'7','sep':'8','oct':'9','nov':'10','dec':'11'};
this._isDisabled=a3;
this._class="TrDateRestrictionValidator";
}
TrDateRestrictionValidator.prototype=new TrValidator();
TrDateRestrictionValidator.prototype.getHints=function(
a4
)
{
if(this.isDisabled())
return null;
return _returnHints(
this._messages,
!this._weekdaysValue?this._weekdaysValue:this._translate(this._weekdaysValue,this._translatedWeekdaysMap,a4.getLocaleSymbols().getWeekdays()),
!this._monthValue?this._monthValue:this._translate(this._monthValue,this._translatedMonthMap,a4.getLocaleSymbols().getMonths()),
"org.apache.myfaces.trinidad.validator.DateRestrictionValidator.WEEKDAY_HINT",
"org.apache.myfaces.trinidad.validator.DateRestrictionValidator.MONTH_HINT",
"hintWeek",
"hintMonth"
);
}
TrDateRestrictionValidator.prototype._translate=function(
values,
map,
valueArray
)
{
if(values)
{
var translatedValues=new Array();
var valuesAsArray=eval(values);
for(i=0;i<valuesAsArray.length;i++)
{
translatedValues.push(valueArray[map[valuesAsArray[i].toLowerCase()]]);
}
return eval(translatedValues);
}
else
{
return values;
}
}
TrDateRestrictionValidator.prototype._removeDisabledValues=function(
a5,
a6
)
{
if(a5&&a6)
{
for(i=0;i<a6.length;i++)
{
if(a5[a6[i].toLowerCase()]!=undefined)
{
a6.splice(i,1);
i--;
}
}
}
}
TrDateRestrictionValidator.prototype.isDisabled=function()
{
return this._isDisabled;
}
TrDateRestrictionValidator.prototype.validate=function(
value,
label,
converter
)
{
if(value==null||this.isDisabled())
return null
submittedDay=value.getDay();
weekDaysArray=eval(this._weekdaysValue);
if(weekDaysArray)
{
var dayString=this._weekdaysMap[submittedDay];
for(var i=0;i<weekDaysArray.length;++i)
{
if(weekDaysArray[i].toLowerCase()==dayString)
{
var days=_trToString(this._translate([dayString],this._translatedWeekdaysMap,converter.getLocaleSymbols().getWeekdays()));
var facesMessage;
var key="org.apache.myfaces.trinidad.validator.DateRestrictionValidator.WEEKDAY";
if(this._messages&&this._messages["days"])
{
facesMessage=_createCustomFacesMessage(TrMessageFactory.getSummaryString(key),
this._messages["days"],
label,
""+converter.getAsString(value),
days);
}
else
{
facesMessage=_createFacesMessage(key,
label,
""+converter.getAsString(value),
days);
}
throw new TrConverterException(facesMessage);
}
}
}
submittedMonth=value.getMonth();
monthArray=eval(this._monthValue);
if(monthArray)
{
var monthString=this._monthMap[submittedMonth];
for(var i=0;i<monthArray.length;++i)
{
if(monthArray[i].toLowerCase()==monthString)
{
var month=_trToString(this._translate([monthString],this._translatedMonthMap,converter.getLocaleSymbols().getMonths()));
var facesMessage;
var key="org.apache.myfaces.trinidad.validator.DateRestrictionValidator.MONTH";
if(this._messages&&this._messages["month"])
{
facesMessage=_createCustomFacesMessage(TrMessageFactory.getSummaryString(key),
this._messages["month"],
label,
""+converter.getAsString(value),
month);
}
else
{
facesMessage=_createFacesMessage(key,
label,
""+converter.getAsString(value),
month);
}
throw new TrConverterException(facesMessage);
}
}
}
return value;
}
function _decimalParse(
a0,
a1,
a2,
a3,
a4,
a5,
a6,
a7,
a8,
a9
)
{
if(a0==null)
return null;
a0=TrFormatUtils.trim(a0);
if(a0.length==0)
return null
var a10=null;
var a11=getLocaleSymbols();
if(a11&&(a9!=true))
{
var a12=a11.getGroupingSeparator();
if((a0.indexOf(a12)==0)||
(a0.lastIndexOf(a12)==(a0.length-1)))
{
a10=_createFacesMessage(a2+".CONVERT",
a7,
a0);
throw new TrConverterException(a10);
}
if(a12=="\xa0"){
var a13=new RegExp("\\ ","g");
a0=a0.replace(a13,"\xa0");
}
var a14=new RegExp("\\"+a12,"g");
a0=a0.replace(a14,"");
var a15=new RegExp("\\"+a11.getDecimalSeparator(),"g");
a0=a0.replace(a15,".");
var a16=document.documentElement["dir"].toUpperCase()=="LTR";
if(!a16)
{
var a17=a0.length;
if(a0.lastIndexOf("-")==(a17-1))
{
a0="-"+a0.substring(0,a17-1);
}
}
}
if((a0.indexOf('e')<0)&&
(a0.indexOf('E')<0)&&
(((a0*a0)==0)||
((a0/a0)==1)))
{
var a18=null;
var a19=false;
if(a8!=null)
{
a0=TrNumberFormat.trimLeadingZeroes(a0);
if(a8==true)
{
a18=parseFloat(a0);
}
else
{
a18=parseFloat(a0);
if(a18!=null&&!isNaN(a18))
{
var a20=a18.toFixed(0);
a18=parseInt(a20);
}
}
}
else
{
a18=parseInt(a0);
if(Math.abs(a18)<Math.abs(parseFloat(a0)))
{
a19=true;
}
}
if(!a19&&!isNaN(a18))
{
var a21=a0.length;
var a22=0;
var a23=a0.lastIndexOf('.');
if(a23!=-1)
{
a21=a23;
a22=parseInt(a0.length-parseInt(a23+1));
}
var a24;
var a25;
if((a5!=null)&&
(a18>a5))
{
a24=a2+".MAXIMUM";
a25=a5;
}
else if((a6!=null)&&
(a18<a6))
{
a24=a2+".MINIMUM";
a25=a6;
}
if(a24)
{
a10=_createFacesMessage(a24,
a7,
a0,
""+a25);
throw new TrConverterException(a10);
}
return a18;
}
}
var a26=null;
var a27=false;
if(a2.indexOf("NumberConverter")==-1)
{
a26=a2+".CONVERT";
}
else
{
a26=a2+".CONVERT_NUMBER";
if(a1&&a1["number"])
{
a10=_createCustomFacesMessage(TrMessageFactory.getSummaryString(a26),
a1["number"],
a7,
a0);
a27=true;
}
}
if(!a27)
{
a10=_createFacesMessage(a26,
a7,
a0);
}
throw new TrConverterException(a10);
}
function TrRegExpValidator(
a0,
a1,
a2
)
{
this._pattern=a0;
this._messages=a1;
this._class="TrRegExpValidator";
this._isDisabled=a2;
}
TrRegExpValidator.prototype=new TrValidator();
TrRegExpValidator.prototype.getHints=function(
a3
)
{
if(this.isDisabled())
return null;
var a4=null;
if(this._messages["hint"])
{
a4=new Array();
a4.push(TrMessageFactory.createCustomMessage(
this._messages["hint"],
""+this._pattern)
);
}
return a4;
}
TrRegExpValidator.prototype.isDisabled=function()
{
return this._isDisabled;
}
TrRegExpValidator.prototype.validate=function(
a5,
a6,
a7
)
{
if(a5==null||this.isDisabled())
return null;
a5=a5+'';
var a8=a5.length;
if(a8==0)
return null;
var a9="^("+this._pattern+")$";
var a10=a5.match(a9);
if((a10!=(void 0))&&(a10[0]==a5))
{
return a5;
}
else
{
var a11="org.apache.myfaces.trinidad.validator.RegExpValidator.NO_MATCH";
var a12;
if(this._messages&&this._messages["detail"])
{
a12=_createCustomFacesMessage(
TrMessageFactory.getSummaryString(a11),
this._messages["detail"],
a6,
a5,
this._pattern);
}
else
{
a12=_createFacesMessage(a11,
a6,
a5,
this._pattern);
}
throw new TrValidatorException(a12);
}
}
function _returnRangeHints(
a0,
a1,
a2,
a3,
a4,
a5,
a6,
a7,
a8
)
{
if(a1!=null&&a2!=null)
{
var a9=new Array();
if(a0&&a0[a8])
{
a9.push(
TrMessageFactory.createCustomMessage(
a0[a8],
""+a2,
""+a1)
);
}
else
{
a9.push(
TrMessageFactory.createMessage(
a5,
""+a2,
""+a1)
);
}
return a9;
}
return _returnHints(
a0,
a1,
a2,
a3,
a4,
a6,
a7
);
}
function _trToString(a0)
{
if(Array.prototype.isPrototypeOf(a0))
{
return a0.join(", ");
}
else
{
return""+a0;
}
}
function _returnHints(
a0,
a1,
a2,
a3,
a4,
a5,
a6
)
{
var a7;
if(a1!=null)
{
a7=new Array();
if(a0&&a0[a5])
{
a7.push(
TrMessageFactory.createCustomMessage(
a0[a5],
_trToString(a1))
);
}
else
{
a7.push(
TrMessageFactory.createMessage(
a3,
_trToString(a1))
);
}
}
if(a2!=null)
{
if(!a7)
{
a7=new Array();
}
if(a0&&a0[a6])
{
a7.push(
TrMessageFactory.createCustomMessage(
a0[a6],
_trToString(a2))
);
}
else
{
a7.push(
TrMessageFactory.createMessage(
a4,
_trToString(a2))
);
}
}
return a7;
}
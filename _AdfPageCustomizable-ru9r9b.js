AdfUIComponents.createComponentClass("AdfPageCustomizable",{componentType:"oracle.adf.page.PageCustomizable",propertyKeys:[{name:"settingsPanelPosition",type:"String"},{name:"settingsPanelSize",type:"String"}],superclass:AdfRichPanelSplitter});
AdfRichUIPeer.createPeerClass(AdfRichUIPeer,"AdfDhtmlPageCustomizablePeer",!1);AdfPage.PAGE.getLookAndFeel().registerPeerConstructor("oracle.adf.page.PageCustomizable","AdfDhtmlPageCustomizablePeer");AdfDhtmlPageCustomizablePeer.InitSubclass=function(){AdfObject.ensureClassInitialization(AdfPageCustomizable);AdfObject.ensureClassInitialization(PESelection);AdfObject.ensureClassInitialization(ComposerToolbar);AdfRichUIPeer.addComponentEventHandlers(this,AdfUIInputEvent.CLICK_EVENT_TYPE)};
AdfDhtmlPageCustomizablePeer.prototype.InitDomElement=function(a,b){AdfDhtmlPageCustomizablePeer.superclass.InitDomElement.call(this,a,b);var c=a.getProperty(AdfDhtmlPageCustomizablePeer._CONTENT_CONTRIB_KEY);c!=void 0&&AdfRichUIPeer.registerKeyStroke(a,c,this._handleComponentKeyUp);c=a.getProperty(AdfDhtmlPageCustomizablePeer._EDIT_MODE_KEY);c!=void 0&&AdfRichUIPeer.registerKeyStroke(a,c,this._handleComponentKeyUp);c=a.getProperty(AdfDhtmlPageCustomizablePeer._COMP_VIEW_KEY);c!=void 0&&AdfRichUIPeer.registerKeyStroke(a,
c,this._handleComponentKeyUp)};AdfDhtmlPageCustomizablePeer._CONCUR_MSG_HEIGHT=24;AdfDhtmlPageCustomizablePeer._TOOLBAR_HEIGHT_PROP="toolbarHeight";AdfDhtmlPageCustomizablePeer._EDIT_MODE_KEY="editModeKey";AdfDhtmlPageCustomizablePeer._COMP_VIEW_KEY="compViewKey";AdfDhtmlPageCustomizablePeer._CONTENT_CONTRIB_KEY="contentContribKey";
AdfDhtmlPageCustomizablePeer.prototype.DomReplaceNotify=function(a){if(this._concurrencyMsgNode==void 0)return a;var b=AdfDomUtils.getFirstChildElement(this._concurrencyMsgNode);if(a.id==b.id){this.getComponent();b=AdfDomUtils.isVisible(b);if(b==this._isConcurrencyMsgVisible)return a;var c=AdfAgent.AGENT;c.prepareStretchedChild(this._editableAreaNode,"0px");var d=this._getSize(this._toolbarNode,"height")+this._getSize(this._subViewToolbarNode,"height");b&&(d+=AdfDhtmlPageCustomizablePeer._CONCUR_MSG_HEIGHT);
this._isConcurrencyMsgVisible=b;c.repositionStretchedElement(this._editableAreaNode,d+"px","0px")}return a};
AdfDhtmlPageCustomizablePeer.prototype.BindToComponent=function(a,b){AdfDhtmlPageCustomizablePeer.superclass.BindToComponent.call(this,a,b);var c=a.getClientId(),d=AdfRichUIPeer.CreateSubId(c,"t"),f=AdfRichUIPeer.CreateSubId(c,"cm"),g=AdfRichUIPeer.CreateSubId(c,"su"),e=AdfAgent.AGENT,c=AdfRichUIPeer.CreateSubId(c,"c");this._editableAreaNode=e.getElementById(c);if(this._editableAreaNode==void 0)this._editableAreaNode=AdfDomUtils.getLastChildElement(b);this._toolbarNode=e.getElementById(d);this._concurrencyMsgNode=
e.getElementById(f);this._subViewToolbarNode=e.getElementById(g);if(this._concurrencyMsgNode!=void 0)this._isConcurrencyMsgVisible=AdfDomUtils.isVisible(AdfDomUtils.getFirstChildElement(this._concurrencyMsgNode))};AdfDhtmlPageCustomizablePeer.prototype.UnbindFromComponent=function(){AdfDhtmlPageCustomizablePeer.superclass.UnbindFromComponent.call(this);this._subViewToolbarNode=this._concurrencyMsgNode=this._toolbarNode=this._editableAreaNode=null;this._isConcurrencyMsgVisible=!1};
AdfDhtmlPageCustomizablePeer.prototype._handleComponentKeyUp=function(a){var b=this.getComponent();if(a==b.getProperty(AdfDhtmlPageCustomizablePeer._CONTENT_CONTRIB_KEY)&&!b.getProperty("isEditMode"))return AdfCustomEvent.queue(b,"__oc_contentContribution",null,!1),!0;if(a==b.getProperty(AdfDhtmlPageCustomizablePeer._EDIT_MODE_KEY))if(b.getProperty("isEditMode")){var c=b.findComponent("peClose");if(c==void 0)return a=new AdfCustomEvent(b,"__oc_editMode",null,!0),a.setPartial(!1),a.queue(),!0;AdfActionEvent.queue(c,
!1)}else return AdfCustomEvent.queue(b,"__oc_editMode",null,!1),!0;a==b.getProperty(AdfDhtmlPageCustomizablePeer._COMP_VIEW_KEY)&&AdfCustomEvent.queue(b,"__oc_compView",null,!1);return!0};AdfDhtmlPageCustomizablePeer.prototype._getSize=function(a,b){return a&&AdfDomUtils.isVisible(a)?AdfAgent.getCSSLengthAsInt(a.style[b]):0};
AdfDhtmlPageCustomizablePeer.prototype.HandleComponentClick=function(a){if(this.getComponent().getProperty("designView")){var b=a.getSource();if(b.getComponentType()=="oracle.adf.PanelCustomizable"){a=a.getNativeEventTarget();if(a.id!=null&&a.id.endsWith("::add")>0)return;a=a.parentNode;if(a.id!=null&&a.id.endsWith("::add")>0)return}var b=b.getClientId(),a="",c=b;b&&b.indexOf(":")>0&&(a=b.substring(0,b.indexOf(":")),c=b.substring(b.lastIndexOf(":")+1));a=="pePanel"||c=="pePanel"||b.indexOf(":pePanel:")>
0||c=="facet_hidecat"||c=="facet_showca"||c=="dsv_hidecat"||c=="dsv_showca"||ComposerToolbar.hideResourceCatalogInDesignView()}};
function ComposerUtils(){this.Init()}AdfObject.createSubclass(ComposerUtils,AdfObject);ComposerUtils.prototype.Init();ComposerUtils.toggleMode=function(a){var a=a.getSource().getParent().getClientId(),a=document.getElementById(a),b=document.createElement("input");b.setAttribute("id","webcenter_composer_change_mode");b.setAttribute("name","webcenter_composer_change_mode");b.setAttribute("type","hidden");b.setAttribute("value","yes");a.appendChild(b)};
ComposerUtils.serializeObject=function(a){if(typeof a.toSource!=="undefined"&&typeof a.callee==="undefined")return a.toSource();switch(typeof a){case "number":case "boolean":case "function":return a;case "string":return"'"+a+"'";case "object":var b;if(a.constructor===Array||typeof a.callee!=="undefined"){b="[";var c,d=a.length;for(c=0;c<d-1;c++)b+=ComposerUtils.serializeObject(a[c])+",";b+=ComposerUtils.serializeObject(a[c])+"]"}else{b="{";for(c in a)b+=c+":"+ComposerUtils.serializeObject(a[c])+",";
b=b.replace(/\,$/,"")+"}"}return b;default:return"UNKNOWN"}};ComposerUtils.launchHelp=function(a){var b=a.getSource(),c=b.getProperty("helpTopicUrl");a.cancel();c==null?(a="nohelp",b=b.getClientId(),c=b.lastIndexOf(":"),a=b.substring(0,c)+":"+a,AdfPage.PAGE.findComponent(a).show()):AdfDomUtils.launchHelpWindow(c)};ComposerUtils._launchDialog=function(a){null!=a&&(a=AdfPage.PAGE.findComponent(a),null!=a&&a.show())};
ComposerUtils._cancelDialog=function(a){null!=a&&(a=AdfPage.PAGE.findComponent(a),null!=a&&a.cancel())};
function PESelection(){this.Init()}AdfObject.createSubclass(PESelection,AdfObject);PESelection.InitClass=function(){this.EVENT_SOURCE_NAVIGATOR="SN";this.EVENT_SOURCE_PROP_INSP="PI";this.EVENT_SOURCE_OPEN_INCLUDE="SNOI";this.EVENT_SOURCE_CLOSE_INCLUDE="SNCI";this.EVENT_SOURCE_BREADCRUMBS="BC";this.EVENT_SOURCE_COMPONENT="SC";this.EVENT_SOURCE_RESET_SELECTION="SCONCL"};
PESelection.prototype.Init=function(){this._installPropertyListener=!0;this._prevSelectedComponentId=this._source=this._editableAreaClientId=this._pageCustomizableClientId=this._selectedComponent=null;this._selectionEnabled=this._editWarningOutcome=!1;this._sharedComp=null};PESelection._setPageCustomizableClientId=function(a){this._pageCustomizableClientId=a};PESelection._getPageCustomizableClientId=function(){return this._pageCustomizableClientId};
PESelection._getPageCustomizable=function(){var a=PESelection._getPageCustomizableClientId();return AdfPage.PAGE.findComponent(a)};PESelection._setEditableAreaClientId=function(a){this._editableAreaClientId=a};PESelection._getEditableAreaClientId=function(){return this._editableAreaClientId};PESelection.getSelectedComponent=function(){return this._selectedComponent};PESelection.setSelectedComponent=function(){AdfLogger.LOGGER.severe("PESelection._setSelectedComponent not implemented.")};
PESelection._getInstallPropertyListener=function(){return this._installPropertyListener};PESelection._setInstallPropertyListener=function(a){this._installPropertyListener=a};PESelection._isEditWarningOutcome=function(){return this._editWarningOutcome};PESelection._setEditWarningOutcome=function(a){this._editWarningOutcome=a};PESelection._setPrevSelectedComponentId=function(a){this._prevSelectedComponentId=a};PESelection._getPrevSelectedComponentId=function(){return this._prevSelectedComponentId};
PESelection._getPrevSelectedComponent=function(){return PESelection._getPrevSelectedComponentId()==void 0?null:AdfPage.PAGE.findComponent(PESelection._getPrevSelectedComponentId())};PESelection._installPropChangeEventHandler=function(){AdfPage.PAGE.addPropertyChangeListener(null,PESelection._pagePropertyChangeHandler);PESelection._setInstallPropertyListener(!1)};
PESelection._uninstallPropChangeEventHandler=function(){PESelection._getInstallPropertyListener()==!1&&(AdfPage.PAGE.removePropertyChangeListener(null,PESelection._pagePropertyChangeHandler),PESelection._setInstallPropertyListener(!0))};PESelection._setEditableTree=function(a){AdfPage.PAGE.setEditableSubtree(a);AdfPage.PAGE.setEditableSubtreeFilter(PESelection.isSelectable,null)};PESelection._unsetEditableTree=function(){AdfPage.PAGE.setEditableSubtree(null)};
PESelection.isSelectable=function(a){return a.getProperty("__wc_selectable")==!1?AdfRichInlineEditor.FILTER_UNSELECTABLE:AdfRichInlineEditor.FILTER_SELECTABLE};PESelection.refreshSelectionMode=function(){PESelection.disableSelectionMode();PESelection.enableSelectionMode()};
PESelection.enableSelectionMode=function(){var a=PESelection._getEditableAreaClientId(),a=AdfPage.PAGE.findComponent(a);if(a!=AdfPage.PAGE.getEditableSubtree())PESelection._installPropChangeEventHandler(),PESelection._setEditableTree(a),PESelection._selectionEnabled=!0};PESelection.disableSelectionMode=function(){PESelection._uninstallPropChangeEventHandler();PESelection._unsetEditableTree();PESelection._selectionEnabled=!1;PESelection._source=null;PESelection._selectedComponent=null};
PESelection._findComponentInComposerRegion=function(a){return PESelection._getPageCustomizable().findComponent("pePanel",!1).findComponent(a,!1)};
PESelection._launchSelectionMenuPopup=function(){var a=PESelection._findComponentInComposerRegion("_svPopup");a.isPopupVisible()&&a.hide();var b=PESelection.getSelectedComponent().getClientId(),c={};c[AdfRichPopup.HINT_ALIGN]=AdfRichPopup.ALIGN_BEFORE_END;c[AdfDhtmlPopupWindow.HINT_AUTODISMISS]=AdfDhtmlPopupWindow.HINT_AUTODISMISS_MENU;c[AdfRichPopup.HINT_ALIGN_ID]=b;a.show(c)};
PESelection._launchEditWarningPopup=function(){var a=PESelection._findComponentInComposerRegion("_shEdWrn");a.setProperty("__OC_source",PESelection._source,!1,AdfUIComponent.PROPAGATE_NEVER);a.show()};PESelection._hideEditWarningPopup=function(){PESelection._findComponentInComposerRegion("_shEdWrn").hide()};
PESelection._handleEditWarningClose=function(a){if(PESelection._isEditWarningOutcome()==!0)PESelection._setEditWarningOutcome(!1);else{PESelection._selectedComponent=PESelection._getPrevSelectedComponent();var b=null;PESelection.getSelectedComponent()!=void 0&&(b=Array(1),b[0]=PESelection.getSelectedComponent());PESelection._source=PESelection.EVENT_SOURCE_RESET_SELECTION;AdfPage.PAGE.setSelectedEditingComponents(b);PESelection._source=null}a.cancel()};
PESelection._handleEditWarningDialog=function(a){if(a.getOutcome()==AdfDialogEvent.OUTCOME_YES){PESelection._setEditWarningOutcome(!0);var b=a.getSource().getParent().getProperty("__OC_source"),c=PESelection.getSelectedComponent().getClientId(),d=PESelection._getPageCustomizable();AdfCustomEvent.queue(d,"SelectionEvent",{selComp:c,source:b},!1)}PESelection._hideEditWarningPopup();a.cancel()};
PESelection._isOnSharedPage=function(a){if((PESelection._source==null||PESelection._source==PESelection.EVENT_SOURCE_BREADCRUMBS)&&a.getClientId()==PESelection._getCurrentRootCompId())return!1;for(a=PESelection._source==PESelection.EVENT_SOURCE_CLOSE_INCLUDE||PESelection._source==PESelection.EVENT_SOURCE_OPEN_INCLUDE||PESelection._source==PESelection.EVENT_SOURCE_BREADCRUMBS?a:a.getParent();a!=null;)if(a.getProperty("__oc_sharedComp")==!0){PESelection._sharedComp=a;if(a.getClientId()==PESelection._getCurrentRootCompId())break;
a.getProperty("__oc_shEdDlgTitle")!=void 0&&PESelection._findComponentInComposerRegion("_shEdD1").setTitle(a.getProperty("__oc_shEdDlgTitle"));var b=a.getProperty("__oc_shEdDlgMsg");b!=void 0&&PESelection._findComponentInComposerRegion("_shEdot1").setValue(b);a=a.getProperty("__oc_shEdDlgMsgDetail");a!=void 0&&PESelection._findComponentInComposerRegion("_shEdot2").setValue(a);return!0}else a=a.getParent();return!1};
PESelection._isSharedEditWarningDisabled=function(){var a=PESelection._findComponentInComposerRegion("_shrEdWrn");return a==void 0?!0:a.getValue()};PESelection._getCurrentRootCompId=function(){return PESelection._findComponentInComposerRegion("curPanl").findComponent("snTree",!1).getProperty("currentRootCompId")};
PESelection._pagePropertyChangeHandler=function(a){var b=a.getPropertyName();if(AdfPage.SELECTED_EDITING_COMPONENTS_PROPERTY==b&&PESelection._source!=PESelection.EVENT_SOURCE_RESET_SELECTION&&(b=a.getNewValue(),b=b!=null?b[0]:null,a=a.getOldValue(),a=a!=null?a[0]:null,b!=null)){var c=PESelection._getPageCustomizable();if(c!=null){var d=c.getProperty("componentView");if(d||b.equals(a)==!1||PESelection._source==PESelection.EVENT_SOURCE_OPEN_INCLUDE){var e=b.getClientId();if(e!=null){if(d&&(PESelection._source==
null||PESelection._source==void 0))PESelection._source=PESelection.EVENT_SOURCE_COMPONENT;if((PESelection._source==null||PESelection._source==PESelection.EVENT_SOURCE_OPEN_INCLUDE||PESelection._source==PESelection.EVENT_SOURCE_CLOSE_INCLUDE||PESelection._source==PESelection.EVENT_SOURCE_BREADCRUMBS)&&!PESelection._isSharedEditWarningDisabled()&&PESelection._isOnSharedPage(b)){if(PESelection._sharedComp==null||PESelection._sharedComp.getProperty("__wc_selectable")==!0)PESelection._selectedComponent=
b,PESelection._setPrevSelectedComponentId(a==void 0?null:a.getClientId()),PESelection._launchEditWarningPopup()}else PESelection._selectedComponent=b,PESelection._setPrevSelectedComponentId(a==void 0?null:a.getClientId()),AdfCustomEvent.queue(c,"SelectionEvent",{selComp:e,source:PESelection._source},!1)}}}}};PESelection.savePageEditorPanel=function(){};PESelection.applyPageEditorPanel=function(){};PESelection.closePageEditorPanel=function(){PESelection.disableSelectionMode()};
PESelection.selectComponent=function(a,b){if(a!=null){var c=AdfPage.PAGE.findComponent(a);b==PESelection.EVENT_SOURCE_CLOSE_INCLUDE&&c!=null?(this._selectedComponent=c.getParent(),a=this._selectedComponent.getClientId()):this._selectedComponent=c;AdfPage.PAGE.getEditableSubtree()==null&&(PESelection._setEditableAreaClientId(PESelection._getEditableAreaClientId()),PESelection.enableSelectionMode());c=null;if(this._selectedComponent!=void 0)c=Array(1),c[0]=this._selectedComponent;this._source=b;AdfPage.PAGE.setSelectedEditingComponents(c);
this._source=null;this._selectedComponent==void 0&&b!=PESelection.EVENT_SOURCE_RESET_SELECTION&&(c=PESelection._getPageCustomizable(),AdfCustomEvent.queue(c,"SelectionEvent",{selComp:a,source:b},!1))}};PESelection.deleteComponent=function(a){PESelection.disableSelectionMode();var b=PESelection._getPageCustomizable();b!=null&&AdfCustomEvent.queue(b,"DeletionEvent",{delComp:a},!0)};
function PropertyInspector(){this.Init()}AdfObject.createSubclass(PropertyInspector,AdfObject);PropertyInspector.prototype.Init=function(){};PropertyInspector.selectComponent=function(a,c){var b=a.getSource();a.cancel();b=b.getProperty(c);PESelection.selectComponent(b,PESelection.EVENT_SOURCE_PROP_INSP)};
PropertyInspector.showContextMenu=function(a,c,b){var d=a.getSource();a.cancel();d.findComponent(c).show({align:AdfRichPopup.ALIGN_AFTER_END,alignId:d.getClientId()});AdfCustomEvent.queue(d,b,null,!1)};PropertyInspector.handleComponentDeletion=function(a){a.getOutcome()==AdfDialogEvent.OUTCOME_OK&&PESelection.deleteComponent(null)};PropertyInspector.navigateToSelectedComponent=function(a){PropertyInspector.selectComponent(a,"navigationComponentId")};
PropertyInspector.toggleSelectedState=function(a){a=a.getSource().getPeer().getDomElement();AdfDomUtils.containsCSSClassName(a,"p_AFSelected")?AdfDomUtils.removeCSSClassName(a,"p_AFSelected"):AdfDomUtils.addCSSClassName(a,"p_AFSelected")};
function StructureNavigator(){}AdfObject.createSubclass(StructureNavigator,AdfObject);StructureNavigator.handleNodeSelection=function(a){var a=a.getSource(),b=a.getSelectedRowKeys(),c;for(c in b){c=a.findComponent("pgl1_sn",c).getProperty("compClientId");PESelection.selectComponent(c,PESelection.EVENT_SOURCE_NAVIGATOR);break}};
StructureNavigator.showToolTip=function(a){var b=a.getSource(),c=b.getProperty("toolTip");if(c!=void 0){var d=PESelection._findComponentInComposerRegion("curPanl").findComponent("tooltip_sn",!1);d.findComponent("tooltip_ot1",!1).setValue(c);d.isPopupVisible()&&d.hide();c={};c[AdfRichPopup.HINT_ALIGN]=AdfRichPopup.ALIGN_END_AFTER;c[AdfRichPopup.HINT_ALIGN_ID]=b.getClientId();d.show(c)}a.cancel()};
StructureNavigator.handleBreadCrumbsClick=function(a){var b=a.getSource().getProperty("compClientId");PESelection.selectComponent(b,PESelection.EVENT_SOURCE_BREADCRUMBS);a.cancel()};
StructureNavigator.handleIncludeClick=function(a){for(var b=a.getSource(),c=b.getProperty("closeInclude"),b=b.getParent(),d=b.getProperty("compClientId");b!=void 0&&d==void 0;)b=b.getParent(),d=b.getProperty("compClientId");PESelection.selectComponent(d,c?PESelection.EVENT_SOURCE_CLOSE_INCLUDE:PESelection.EVENT_SOURCE_OPEN_INCLUDE);a.cancel()};StructureNavigator.handleComponentDeletion=function(a){a.getOutcome()==AdfDialogEvent.OUTCOME_OK&&PESelection.deleteComponent(null)};
function PEInlineEditing(){this.Init()}AdfObject.createSubclass(PEInlineEditing,AdfObject);PEInlineEditing.prototype.Init=function(){this._valueInputId=this._editingPropertyName=this._selectedComponent=null};
PEInlineEditing._getValueEditor=function(){if(this._valueInputId!=null)return this._valueInputId;var a=document.getElementsByTagName("span");for(i=0;i<a.length;i++)if(!(a[i].id.substring("curPanl:properties_subview")<=0)){var b=AdfPage.PAGE.findComponent(a[i].id);if(void 0!=b&&b.getComponentType()=="oracle.adf.RichInputText"&&b.getLabel()=="value")return this._valueInputId=b.getClientId()}};PEInlineEditing._setSelectedValue=function(a){a.cancel()};
PEInlineEditing._selectedPropertyChange=function(a){a.getPropertyName()=="value"&&AdfPage.PAGE.findComponent(PEInlineEditing._getValueEditor()).setValue(a.getNewValue())};
function ComposerToolbar(){this.Init()}AdfObject.createSubclass(ComposerToolbar,AdfObject);ComposerToolbar.prototype.Init=function(){};ComposerToolbar.InitClass=function(){};ComposerToolbar.handleViewChange=function(b){var a=b.getSource(),c=PESelection._getPageCustomizable().getProperty("layoutView");a.getId()=="tbDesMenu"&&c?b.cancel():a.getId()=="tbCodeMenu"&&!c&&b.cancel()};
ComposerToolbar.showResourceCatalog=function(b){var a=PESelection._getPageCustomizable();if(a.getProperty("designView"))ComposerToolbar.showResourceCatalogInDesignView();else{a.findComponent("pePanel").getParent().setCollapsed(!1);var c=b.getSource();c.setVisible(!1);var d=c.getParent().findComponent("dsv_hidecat");d&&d.setVisible(!0);(c=c.getParent().findComponent("facet_hidecat"))&&c.setVisible(!0);a.setCollapsed(!1)}b.cancel()};
ComposerToolbar.hideResourceCatalog=function(b){var a=PESelection._getPageCustomizable();if(a.getProperty("designView"))ComposerToolbar.doHideResourceCatalog();else{a.findComponent("pePanel").getParent().setCollapsed(!0);var c=b.getSource();c.setVisible(!1);var d=c.getParent().findComponent("dsv_showcat");d&&d.setVisible(!0);(c=c.getParent().findComponent("facet_showcat"))&&c.setVisible(!0);a.setCollapsed(!0)}b.cancel()};
ComposerToolbar.showResourceCatalogInDesignView=function(){var b=PESelection._getPageCustomizable();if(b.getProperty("designView")){var a=b.getClientId(),a=AdfRichUIPeer.CreateSubId(a,"rc");(a=AdfAgent.AGENT.getElementById(a))&&AdfDomUtils.addCSSClassName(a,"p_AFOpen");setTimeout(function(){var a=b.findComponent("pePanel:curPanl2:rcvQry");a&&a.focus()},1E3);(a=b.findComponent("dsv_hidecat"))&&a.setVisible(!0);(a=b.findComponent("dsv_showcat"))&&a.setVisible(!1);(a=b.findComponent("facet_hidecat"))&&
a.setVisible(!0);(a=b.findComponent("facet_showcat"))&&a.setVisible(!1);b.setCollapsed(!1)}};ComposerToolbar.hideResourceCatalogInDesignView=function(){PESelection._getPageCustomizable().getProperty("designView")&&ComposerToolbar.doHideResourceCatalog()};
ComposerToolbar.doHideResourceCatalog=function(){var b=PESelection._getPageCustomizable();if(b){var a=b.getClientId(),a=AdfRichUIPeer.CreateSubId(a,"rc");(a=AdfAgent.AGENT.getElementById(a))&&AdfDomUtils.removeCSSClassName(a,"p_AFOpen");(a=b.findComponent("dsv_hidecat"))&&a.setVisible(!1);(a=b.findComponent("dsv_showcat"))&&a.setVisible(!0);(a=b.findComponent("facet_hidecat"))&&a.setVisible(!1);(a=b.findComponent("facet_showcat"))&&a.setVisible(!0);b.setCollapsed(!0)}};
function ComposerResourceCatalog(){this.Init()}AdfObject.createSubclass(ComposerResourceCatalog,AdfObject);ComposerResourceCatalog.prototype.Init();ComposerResourceCatalog.showDropHandlerMenu=function(b,d){if(b!=null){var c=AdfPage.PAGE.findComponent(b);if(c!=null){var a={};a[AdfRichPopup.HINT_ALIGN_ID]=d;a[AdfRichPopup.HINT_ALIGN]=AdfRichPopup.ALIGN_AFTER_START;c.show(a)}}};
function oc_pa_Accordion(a,b,c,d,e,f,g){this.id=a;this.text=b;this.icon=c;this.shortDesc=d;this.stretch=e;this.hide=f;this.customizable=g;this.toString=function(){return this.id+";"+encodeURIComponent(this.text)+";"+encodeURIComponent(this.icon)+";"+encodeURIComponent(this.shortDesc)+";"+this.stretch+";"+this.hide+";"}}
function oc_pa_Context(){this._HIDE_INPUTTEXT=this._STRETCH_INPUTTEXT=this._SHORTDESC_INPUTTEXT=this._ICON_INPUTTEXT=this._TEXT_INPUTTEXT=this._ID_INPUTTEXT=this._DATA_INPUTTEXT=this.curAccordionId=this.selAccordionId=this.accordionMap=this.initialised=void 0}var oc_pa_CTX=new oc_pa_Context;
oc_pa_Context.prototype.init=function(a){if(this.initialised==void 0)namingContainer=_oc_pa_getNamingContainer(a),this._DATA_INPUTTEXT=namingContainer+"it4",this._TEXT_INPUTTEXT=namingContainer+"text",this._ICON_INPUTTEXT=namingContainer+"icon",this._SHORTDESC_INPUTTEXT=namingContainer+"shortDesc",this._STRETCH_INPUTTEXT=namingContainer+"stretch",this._HIDE_INPUTTEXT=namingContainer+"hide",this._ID_INPUTTEXT=namingContainer+"id",this._ID_DELBTN=namingContainer+"cb2",this.accordionMap={},a=AdfPage.PAGE.findComponent(this._DATA_INPUTTEXT).getValue(),
eval(a),this.curAccordionId=this.selAccordionId,oc_pa_updateDeleteButton(this.curAccordionId),this.initialised=!0};oc_pa_Context.prototype.destroy=function(){this.initialised=void 0};
function oc_pa_handleSelection(a){if(AdfRichSelectOrderShuttle.SELECTION==a.getPropertyName()){var b=a.getSource();if(a=AdfShuttleUtils.getLastSelectionChange(b,a.getOldValue()))oc_pa_CTX.init(b.getClientId()),oc_pa_CTX.selAccordionId=a,oc_pa_updateDeleteButton(a),AdfCustomEvent.queue(b,"oc_pa_selectAccordion",{selId:oc_pa_CTX.selAccordionId},!0)}}
function oc_pa_updateDeleteButton(a){var b=AdfPage.PAGE.findComponent(oc_pa_CTX._ID_DELBTN);b!=null&&b.setProperty("disabled",a==oc_pa_CTX.curAccordionId,!1,AdfUIComponent.PROPAGATE_LOCALLY)}
function oc_pa_updateProperties(a){var b=AdfPage.PAGE.findComponent(oc_pa_CTX._TEXT_INPUTTEXT),c=AdfPage.PAGE.findComponent(oc_pa_CTX._ICON_INPUTTEXT),d=AdfPage.PAGE.findComponent(oc_pa_CTX._SHORTDESC_INPUTTEXT),e=AdfPage.PAGE.findComponent(oc_pa_CTX._STRETCH_INPUTTEXT),f=AdfPage.PAGE.findComponent(oc_pa_CTX._HIDE_INPUTTEXT),g=AdfPage.PAGE.findComponent(oc_pa_CTX._ID_INPUTTEXT);b.setProperty("value",a.text);c.setProperty("value",a.icon);d.setProperty("value",a.shortDesc);e.setProperty("value",a.stretch);
f.setProperty("value",a.hide);g.setProperty("value",a.id)}function _oc_pa_getNamingContainer(a){var b=a.lastIndexOf(":");return b==-1?cidPrefix="":a.substring(0,b+1)}function oc_pa_handleEvent(a){a=a.getSource();oc_pa_CTX.init(a.getClientId())}function oc_pa_handleDeleteBtnClick(a){oc_pa_handleEvent(a);a.cancel()}
function oc_pa_handleDialog(a){a.getOutcome()!=AdfDialogEvent.OUTCOME_NO&&(a.getSource().getParent().hide(),a=AdfPage.PAGE.findComponent(oc_pa_CTX._ID_DELBTN),a!=null&&AdfCustomEvent.queue(a,"oc_pa_deleteAccordion",{delId:oc_pa_CTX.selAccordionId},!1))}function oc_pa_handleValueChange(a){var b=a.getSource();oc_pa_CTX.init(b.getClientId());b=b.getId();oc_pa_CTX.accordionMap[oc_pa_CTX.selAccordionId][b]=a.getNewValue();_oc_pa_encodeNewData()}
function _oc_pa_encodeNewData(){var a,b=new String;for(a in oc_pa_CTX.accordionMap)a!=void 0&&(b+=oc_pa_CTX.accordionMap[a].toString());AdfPage.PAGE.findComponent(oc_pa_CTX._DATA_INPUTTEXT).setProperty("value",b)};
function oc_pt_Tab(a,b,c,d,e,f,g){this.id=a;this.text=b;this.icon=c;this.shortDesc=d;this.stretch=e;this.hide=f;this.customizable=g;this.toString=function(){return this.id+";"+encodeURIComponent(this.text)+";"+encodeURIComponent(this.icon)+";"+encodeURIComponent(this.shortDesc)+";"+this.stretch+";"+this.hide+";"}}
function oc_pt_Context(){this._HIDE_INPUTTEXT=this._STRETCH_INPUTTEXT=this._SHORTDESC_INPUTTEXT=this._ICON_INPUTTEXT=this._TEXT_INPUTTEXT=this._ID_INPUTTEXT=this._DATA_INPUTTEXT=this.curTabId=this.selTabId=this.tabMap=this.initialised=void 0}var oc_pt_CTX=new oc_pt_Context;
oc_pt_Context.prototype.init=function(a){if(this.initialised==void 0)namingContainer=_oc_pt_getNamingContainer(a),this._DATA_INPUTTEXT=namingContainer+"it4",this._TEXT_INPUTTEXT=namingContainer+"text",this._ICON_INPUTTEXT=namingContainer+"icon",this._SHORTDESC_INPUTTEXT=namingContainer+"shortDesc",this._STRETCH_INPUTTEXT=namingContainer+"stretch",this._HIDE_INPUTTEXT=namingContainer+"hide",this._ID_INPUTTEXT=namingContainer+"id",this._ID_DELBTN=namingContainer+"cb2",this.tabMap={},a=AdfPage.PAGE.findComponent(this._DATA_INPUTTEXT).getValue(),
eval(a),this.curTabId=this.selTabId,oc_pt_updateDeleteButton(this.curTabId),this.initialised=!0};oc_pt_Context.prototype.destroy=function(){this.initialised=void 0};function oc_pt_handleSelection(a){if(AdfRichSelectOrderShuttle.SELECTION==a.getPropertyName()){var b=a.getSource();if(a=AdfShuttleUtils.getLastSelectionChange(b,a.getOldValue()))oc_pt_CTX.init(b.getClientId()),oc_pt_CTX.selTabId=a,oc_pt_updateDeleteButton(a),AdfCustomEvent.queue(b,"oc_pt_selectTab",{selId:oc_pt_CTX.selTabId},!0)}}
function oc_pt_updateDeleteButton(a){var b=AdfPage.PAGE.findComponent(oc_pt_CTX._ID_DELBTN);b!=null&&b.setProperty("disabled",a==oc_pt_CTX.curTabId,!1,AdfUIComponent.PROPAGATE_LOCALLY)}
function oc_pt_updateProperties(a){var b=AdfPage.PAGE.findComponent(oc_pt_CTX._TEXT_INPUTTEXT),c=AdfPage.PAGE.findComponent(oc_pt_CTX._ICON_INPUTTEXT),d=AdfPage.PAGE.findComponent(oc_pt_CTX._SHORTDESC_INPUTTEXT),e=AdfPage.PAGE.findComponent(oc_pt_CTX._STRETCH_INPUTTEXT),f=AdfPage.PAGE.findComponent(oc_pt_CTX._HIDE_INPUTTEXT),g=AdfPage.PAGE.findComponent(oc_pt_CTX._ID_INPUTTEXT);b.setProperty("value",a.text);c.setProperty("value",a.icon);d.setProperty("value",a.shortDesc);e.setProperty("value",a.stretch);
f.setProperty("value",a.hide);g.setProperty("value",a.id)}function _oc_pt_getNamingContainer(a){var b=a.lastIndexOf(":");return b==-1?cidPrefix="":a.substring(0,b+1)}function oc_pt_handleEvent(a){a=a.getSource();oc_pt_CTX.init(a.getClientId())}function oc_pt_handleDeleteBtnClick(a){oc_pt_handleEvent(a);a.cancel()}
function oc_pt_handleDialog(a){a.getOutcome()!=AdfDialogEvent.OUTCOME_NO&&(a.getSource().getParent().hide(),a=AdfPage.PAGE.findComponent(oc_pt_CTX._ID_DELBTN),a!=null&&AdfCustomEvent.queue(a,"oc_pt_deleteTab",{delId:oc_pt_CTX.selTabId},!1))}function oc_pt_handleValueChange(a){var b=a.getSource();oc_pt_CTX.init(b.getClientId());b=b.getId();oc_pt_CTX.tabMap[oc_pt_CTX.selTabId][b]=a.getNewValue();_oc_pt_encodeNewData()}
function _oc_pt_encodeNewData(){var a,b=new String;for(a in oc_pt_CTX.tabMap)a!=void 0&&(b+=oc_pt_CTX.tabMap[a].toString());AdfPage.PAGE.findComponent(oc_pt_CTX._DATA_INPUTTEXT).setProperty("value",b)};
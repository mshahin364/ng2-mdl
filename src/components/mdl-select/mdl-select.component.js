System.register(['@angular/core', '@angular/forms', '../../directives/mdl.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, core_2, mdl_directive_1;
    var MDL_SELECT_VALUE_ACCESSOR, MdlSelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (mdl_directive_1_1) {
                mdl_directive_1 = mdl_directive_1_1;
            }],
        execute: function() {
            exports_1("MDL_SELECT_VALUE_ACCESSOR", MDL_SELECT_VALUE_ACCESSOR = {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_2.forwardRef(function () { return MdlSelectComponent; }),
                multi: true
            });
            MdlSelectComponent = (function () {
                function MdlSelectComponent(_el, _ren) {
                    this._el = _el;
                    this._ren = _ren;
                    this.disabled = false;
                    this.changes = new core_1.EventEmitter();
                    this.initialized = false;
                    // Needed to properly implement ControlValueAccessor.
                    this.onChange = function (_) { console.log(); };
                    this.onTouched = function () { console.log(); };
                }
                MdlSelectComponent.prototype.ngAfterViewChecked = function () {
                    if (this.value && !this.initialized)
                        this.updateSelectField();
                };
                MdlSelectComponent.prototype.updateSelectField = function () {
                    if (!this.value)
                        return;
                    var options = this._el.nativeElement.getElementsByTagName('option');
                    var optionsEl = this._el.nativeElement
                        .getElementsByClassName('mdl-selectfield__list-option-box')[0]
                        .children[0].children;
                    this._ren.invokeElementMethod(this._el.nativeElement.getElementsByClassName('mdl-selectfield__box')[0], 'click');
                    for (var i in options) {
                        if (options[i].value == this.value) {
                            this._ren.setElementAttribute(options[i], 'selected', 'selected');
                            this._ren.invokeElementMethod(optionsEl[i], 'click');
                        }
                    }
                    this.initialized = true;
                };
                MdlSelectComponent.prototype.writeValue = function (value) {
                    this.value = value;
                    if (!this.initialized)
                        this.updateSelectField();
                };
                MdlSelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                MdlSelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], MdlSelectComponent.prototype, "id", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], MdlSelectComponent.prototype, "value", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], MdlSelectComponent.prototype, "label", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], MdlSelectComponent.prototype, "class", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Boolean)
                ], MdlSelectComponent.prototype, "disabled", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], MdlSelectComponent.prototype, "changes", void 0);
                __decorate([
                    core_1.HostListener('changes', ['$event']), 
                    __metadata('design:type', Object)
                ], MdlSelectComponent.prototype, "onChange", void 0);
                __decorate([
                    core_1.HostListener('blur', ['$event']), 
                    __metadata('design:type', Object)
                ], MdlSelectComponent.prototype, "onTouched", void 0);
                MdlSelectComponent = __decorate([
                    core_2.Component({
                        selector: 'mdlSelect, mdl-select',
                        template: "\n    <div class=\"mdl-selectfield mdl-js-selectfield\" [ngClass]=\"class\" mdl>\n      <select class=\"mdl-selectfield__select\"\n        [value]=\"value\" #select [id]=\"id\" [disabled]=\"disabled\"\n        (blur)=\"onTouched()\"\n        (change)=\"changes.emit(select.value)\">\n        <ng-content></ng-content>\n      </select>\n      <label class=\"mdl-selectfield__label\" [attr.for]=\"id\">{{label}}</label>\n      <!-- <span class=\"mdl-selectfield__error\">Select aw value</span> -->\n    </div>\n  ",
                        directives: [
                            mdl_directive_1.MdlDirective
                        ],
                        providers: [
                            MDL_SELECT_VALUE_ACCESSOR
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], MdlSelectComponent);
                return MdlSelectComponent;
            }());
            exports_1("MdlSelectComponent", MdlSelectComponent);
        }
    }
});
//# sourceMappingURL=mdl-select.component.js.map
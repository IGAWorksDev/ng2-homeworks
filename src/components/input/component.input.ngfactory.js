import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./component.input";
var styles_WorksInput = ["[_nghost-%COMP%] {\n            display: inline-block;\n            vertical-align: middle;\n        }\n\n        .block[_nghost-%COMP%] {\n            display: block;\n            vertical-align: initial;\n        }"];
var RenderType_WorksInput = i0.ɵcrt({ encapsulation: 0, styles: styles_WorksInput, data: {} });
export { RenderType_WorksInput as RenderType_WorksInput };
export function View_WorksInput_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { inputChild: 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, [[1, 0], ["worksInput", 1]], null, 7, "input", [["class", "input"]], [[1, "type", 0], [1, "id", 0], [1, "name", 0], [1, "title", 0], [8, "readOnly", 0], [1, "placeholder", 0], [1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 3)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 3).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 3)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 3)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(3, 16384, null, 0, i1.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i1.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵdid(4, 16384, null, 0, i1.RequiredValidator, [], { required: [0, "required"] }, null), i0.ɵprd(1024, null, i1.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i1.RequiredValidator]), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.DefaultValueAccessor]), i0.ɵdid(7, 671744, null, 0, i1.NgModel, [[8, null], [2, i1.NG_VALIDATORS], [8, null], [2, i1.NG_VALUE_ACCESSOR]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(9, 16384, null, 0, i1.NgControlStatus, [i1.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_14 = _co.required; _ck(_v, 4, 0, currVal_14); var currVal_15 = _co.disabled; var currVal_16 = _co.model; _ck(_v, 7, 0, currVal_15, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.type; var currVal_1 = _co.id; var currVal_2 = _co.name; var currVal_3 = _co.title; var currVal_4 = _co.readonly; var currVal_5 = _co.placeholder; var currVal_6 = (i0.ɵnov(_v, 4).required ? "" : null); var currVal_7 = i0.ɵnov(_v, 9).ngClassUntouched; var currVal_8 = i0.ɵnov(_v, 9).ngClassTouched; var currVal_9 = i0.ɵnov(_v, 9).ngClassPristine; var currVal_10 = i0.ɵnov(_v, 9).ngClassDirty; var currVal_11 = i0.ɵnov(_v, 9).ngClassValid; var currVal_12 = i0.ɵnov(_v, 9).ngClassInvalid; var currVal_13 = i0.ɵnov(_v, 9).ngClassPending; _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13]); }); }
export function View_WorksInput_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "works-input", [["input", "onInput($event)"]], null, null, null, View_WorksInput_0, RenderType_WorksInput)), i0.ɵprd(5120, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.WorksInput]), i0.ɵdid(2, 4308992, null, 0, i2.WorksInput, [i0.Renderer, i0.ElementRef, i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var WorksInputNgFactory = i0.ɵccf("works-input", i2.WorksInput, View_WorksInput_Host_0, { class: "class", placeholder: "placeholder", color: "color", size: "size", block: "block", type: "type", id: "id", name: "name", title: "title", disabled: "disabled", readonly: "readonly", required: "required", validation: "validation" }, { onUpdate: "update" }, []);
export { WorksInputNgFactory as WorksInputNgFactory };
//# sourceMappingURL=component.input.ngfactory.js.map
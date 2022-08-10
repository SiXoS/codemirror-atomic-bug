import {RangeValue, RangeSetBuilder} from "@codemirror/state"
import {minimalSetup} from "codemirror"
import {EditorView} from "@codemirror/view"

let markAtomic = false

let atomicEntity = EditorView.atomicRanges.of(editorView => {
    console.log("hello")
    let set = new RangeSetBuilder()
    if (markAtomic) {
        set.add(2, 10, new ARange())
    }
    return set.finish()
})

setTimeout(() => {
    let editor = new EditorView({
        extensions: [atomicEntity, /* minimalSetup */],
        parent: document.getElementById("parent"),
    })
    document.getElementById("mark-atomic").onclick = () => {
        markAtomic = true
    }
}, 1000)

class ARange extends RangeValue {

    constructor() {
        super();
    }

    eq(other) {
        return other.endSide === this.endSide &&
            other.startSide === this.endSide &&
            other.mapMode === this.mapMode &&
            other.point === this.point
    }

    startSide = 0
    endSide = 0
    mapMode = 1
    point = false
    range(from, to) {
        return {
            from: from,
            to: to,
            value: this,
        }
    }

}

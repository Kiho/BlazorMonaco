const BlazorEditors = [];

window.monacoJsFunctions = {
    BlazorEditors: BlazorEditors,

    EditorInitialize: function (id, script, language) {
        console.debug(`Registering new editor ${id}...`);
        //throw `EditorInitialize - editorModel.Id: '${id}'`;

        let thisEditor = monaco.editor.create(document.getElementById(id), {
            value: script,
            language: language,
            automaticLayout: true
        });

        const editorModel = {
            Script: script,
            Language: language,
		    Id: id,
        }

        if (BlazorEditors.find(e => e.id === id)) {
            console.error(`Refused to register duplicate editor ${id}`);
        }
        else {
            console.debug(`Registered new editor ${id}`);
            BlazorEditors.push({ id: id, editor: thisEditor, model: editorModel });
        }        
        return true;
    },

    EditorGet: function(id) {
        console.debug(`Getting editor for ${id}...`);
        let myEditor = BlazorEditors.find(e => e.id === id);
        console.debug(`Found: ${myEditor}`);
        if (!myEditor) {
            throw `Could not find a editor with id: '${BlazorEditors.length}' '${id}'`;
        }

        const editorModel = myEditor.model;
        // Update the model
        editorModel.Script = myEditor.editor.getValue();

        return editorModel;
    },

    EditorSet: function (id, script) {
        console.debug(`Setting editor for ${id}...`);
        let myEditor = BlazorEditors.find(e => e.id === id);
        console.debug(`Found: ${myEditor}`);
        if (!myEditor) {
            throw `Could not find a editor with id: '${BlazorEditors.length}' '${id}'`;
        }

        const editorModel = myEditor.model;
        editorModel.Script = script;
        // Update the editor
        myEditor.editor.setValue(script);
        console.debug(`Setting value to success.`);

        return editorModel;
    }
}

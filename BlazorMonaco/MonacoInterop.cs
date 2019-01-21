using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace BlazorMonaco
{
	public static class MonacoInterop
    {
		public static Task<bool> EditorInitialize(string editorModel, string script, string language)
			=> JSRuntime.Current.InvokeAsync<bool>("monacoJsFunctions.EditorInitialize", new[] { editorModel, script, language });

		public static Task<EditorModel> EditorGet(string editorModel)
			=> JSRuntime.Current.InvokeAsync<EditorModel>("monacoJsFunctions.EditorGet", new[] { editorModel });

        public static Task<EditorModel> EditorSet(string editorModel, string script)
            => JSRuntime.Current.InvokeAsync<EditorModel>("monacoJsFunctions.EditorSet", new[] { editorModel, script });
    }
}

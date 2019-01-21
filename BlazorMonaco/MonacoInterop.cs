using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace BlazorMonaco
{
	public static class MonacoInterop
    {
		public static Task<bool> EditorInitialize(string id, string script, string language)
			=> JSRuntime.Current.InvokeAsync<bool>("monacoJsFunctions.EditorInitialize", new[] { id, script, language });

		public static Task<EditorModel> EditorGet(string id)
			=> JSRuntime.Current.InvokeAsync<EditorModel>("monacoJsFunctions.EditorGet", new[] { id });

        public static Task<EditorModel> EditorSet(string id, string script)
            => JSRuntime.Current.InvokeAsync<EditorModel>("monacoJsFunctions.EditorSet", new[] { id, script });
    }
}

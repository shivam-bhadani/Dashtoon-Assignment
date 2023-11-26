const generateImage = async (query: String) => {
	const apiUrl = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";
	const apiKey = "VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM";
	const data = {
		inputs: query,
	};
	const response = await fetch(
		apiUrl,
		{
			headers: {
				Accept: "image/png",
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const blob = await response.blob();
	return new Promise((onSuccess, onError) => {
		try {
			const reader = new FileReader();
			reader.onload = function () {
				onSuccess(this.result);
			};
			reader.readAsDataURL(blob);
		} catch (e) {
			onError(e);
		}
	});
}

export default generateImage;
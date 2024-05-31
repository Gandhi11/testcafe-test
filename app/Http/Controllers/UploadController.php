<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $data = $this->validate($request, [
            'files' => ['required', 'file'],
        ]);

        /** @var \Illuminate\Http\UploadedFile $file */
        $file = $data['files'];

        $fileName = $file->getClientOriginalName();
        $fileSize = $file->getSize();

        $file->storeAs('uploads', $fileName);

        return response()->json([
            'name' => $fileName,
            'size' => $fileSize,
            'url' => '/uploads/' . $fileName,
        ]);
    }

    public function show($filename)
    {
        return response()->download(storage_path('app/uploads/' . $filename));
    }
}

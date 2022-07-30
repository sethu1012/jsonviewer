import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import jsonabc from "jsonabc";
import { CheckIcon, TrashIcon } from "@heroicons/react/solid";
import { NextSeo } from "next-seo";

function HomePage() {
  const [value, setValue] = useState<any>();

  const handleJSONParse = () => {
    if (!value) return;

    setValue(
      JSON.stringify(
        jsonabc.sortObj(new Function("return (" + value + ")")()),
        null,
        2
      )
    );
  };

  return (
    <>
      <NextSeo title="JSON Viewer, Parser" />
      <div className="absolute flex flex-col gap-4 z-10 right-0 mx-4 my-4">
        <button
          className="flex justify-center items-center h-12 w-12 bg-red-500"
          onClick={handleJSONParse}
        >
          <CheckIcon className="h-8 w-8 text-white" />
        </button>
        <button
          className="flex justify-center items-center h-12 w-12 bg-red-500"
          onClick={() => setValue(null)}
        >
          <TrashIcon className="h-8 w-8 text-white" />
        </button>
      </div>
      <Editor
        value={value}
        onChange={(v) => setValue(v)}
        className="w-full h-screen"
        defaultLanguage="json"
        theme="vs-dark"
      />
    </>
  );
}

export default HomePage;

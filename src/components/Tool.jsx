import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { colors } from "../constants/_colors";
import { SubmitButton } from "./Buttons";
import { API } from "aws-amplify";
import { Oval } from "react-loading-icons";
import { disabled } from "../constants/styles";
import engines from "../constants/gpt3engines";
import { presetLabels, presets } from "../constants/presets";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import "../css/Tool.css";

function Tool({ fetchResponse }) {
  const [prompt, updatePrompt] = useState("");
  const [temperature, updateTemperature] = useState(0.7);
  const [maxTokens, updateMaxTokens] = useState(150);
  const [engine, updateEngine] = useState("text-davinci-002");
  const [loading, updateLoading] = useState(false);
  const [showTool, updateShowTool] = useState(true);
  const [presetLabel, updatePresetLabel] = useState("Completion");

  const sliderCustomColor = {
    color: colors.primaryAccentColor,
    cursor: "grab",
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    updateLoading((prev) => !prev);

    var time = new Date();

    const queryStringParameters = {
      prompt,
      temperature,
      engine,
      max_tokens: maxTokens,
    };

    console.log(prompt);

    await API.get("API", "/openai", {
      queryStringParameters: queryStringParameters,
    }).then((res) => {
      updateLoading((prev) => !prev);

      const response = {
        prompt: queryStringParameters.prompt,
        temperature: queryStringParameters.temperature,
        engine: queryStringParameters.engine,
        max_tokens: queryStringParameters.max_tokens,
        response: res.response,
        time,
      };

      fetchResponse(response);
    });
  };

  const onPresetSelect = (e) => {
    e.preventDefault();

    var label = e.target.value;

    console.log(label);

    updatePresetLabel(label);
    updatePrompt(presets[label]);
  };

  return (
    <>
      <div
        className="tool-wrapper"
        style={showTool ? { dipslay: "block" } : { display: "none" }}
      >
        <div
          className="tool-toggle close"
          onClick={() => updateShowTool((prev) => !prev)}
        >
          <CloseIcon />
        </div>
        <div className="tool-section">
          <h1>Parameters</h1>
        </div>
        <div className="tool-section input">
          <label htmlFor="prompt" className="tool-section-labels">
            Prompt
          </label>
          <textarea
            name="prompt"
            rows="8"
            value={prompt}
            onChange={(e) => updatePrompt(e.target.value)}
          />
        </div>
        <div className="tool-section input">
          <label htmlFor="temperature" className="tool-section-labels">
            Temperature
          </label>
          <Slider
            size="large"
            defaultValue={0.7}
            min={0}
            max={1}
            step={0.01}
            sx={sliderCustomColor}
            onChange={(e) => updateTemperature(e.target.value)}
          />
          <div className="tool-slider-res">
            <span>{temperature}</span>
          </div>
        </div>
        <div className="tool-section input">
          <label htmlFor="max tokens" className="tool-section-labels">
            Max Tokens
          </label>
          <Slider
            size="large"
            defaultValue={150}
            min={100}
            max={250}
            step={10}
            sx={sliderCustomColor}
            onChange={(e) => updateMaxTokens(e.target.value)}
          />
          <div className="tool-slider-res">
            <span>{maxTokens}</span>
          </div>
        </div>
        <div className="tool-section input">
          <div className="engine-ref">
            <label htmlFor="engine">Engine</label>
            <a
              href="https://beta.openai.com/docs/engines/gpt-3"
              target="_blank"
              rel="noreferrer"
            >
              <span>Learn More</span>
            </a>
          </div>
          <Select
            size="small"
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            value={engine}
            onChange={(e) => updateEngine(e.target.value)}
          >
            {engines.map((engine, idx) => (
              <MenuItem value={engine} key={idx}>
                {engine}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="tool-section input">
          <label htmlFor="preset" className="tool-section-labels">
            Presets
          </label>
          <Select
            size="small"
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            value={presetLabel}
            onChange={onPresetSelect}
          >
            {presetLabels.map((presetLabel, idx) => (
              <MenuItem value={presetLabel} key={idx}>
                {presetLabel}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="tool-section input last">
          <SubmitButton onClick={onSubmit} style={loading ? disabled : null}>
            {loading ? (
              <>
                <Oval stroke="lightgreen" strokeWidth={3} height="80%" />
              </>
            ) : (
              "SUBMIT"
            )}
          </SubmitButton>
        </div>
      </div>
      {!showTool && (
        <div
          className="tool-toggle open"
          onClick={() => updateShowTool((prev) => !prev)}
        >
          <MenuOpenIcon />
        </div>
      )}
    </>
  );
}

export default Tool;

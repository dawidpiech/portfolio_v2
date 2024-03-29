import React from "react";
import styled from "styled-components";

function LoadingSpinner({ isLoading }) {
  const LoadingSpinner = styled.div`
    ${(props) => console.log(props.isLoading)}
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.colors[4]};
    z-index: 99999;
    animation: ${(props) =>
      props.isLoading ? "" : "scrollToTop 1s ease-in-out forwards"};

    & > div {
      position: relative;
      left: calc(50% - 35px);
      top: calc(50% - 45px);
      width: 70px;
      height: 70px;
      fill: ${(props) => props.theme.colors[2]};
    }

    & > div > div:nth-child(2) {
      position: relative;
      left: 50%;
      top: calc(50% - 8px);
      width: 150px;
      height: 150px;
      margin: -150px 0 0 -75px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: ${(props) => props.theme.colors[2]};
      border-left-color: ${(props) => props.theme.colors[2]};
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes scrollToTop {
      0% {
        top: 0;
      }
      100% {
        top: -100%;
      }
    }
  `;

  return (
    <LoadingSpinner isLoading={isLoading}>
      <div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136 189">
            <mask id="mask">
              <rect width="136" height="189" fill="white" />
              <path
                fill="black"
                d="M 68.00,82.00
                            C 68.00,82.00 61.03,21.54 78.43,21.69
                            100.72,21.20 68.94,81.09 68.00,82.00 Z"
              />
              <path
                fill="black"
                d="M 88.20,103.68
                            C 89.92,89.86 104.44,84.15 103.86,84.08
                            110.01,80.84 124.76,76.65 123.00,93.00
                            118.29,110.98 100.07,123.51 97.19,125.81
                            94.00,127.26 94.91,127.07 90.64,128.53
                            89.75,126.80 89.78,126.43 89.37,125.16
                            87.86,120.45 86.82,114.68 88.20,103.68 Z"
              />
              <path
                fill="black"
                d="M 53.00,105.00
                            C 55.87,99.94 58.03,95.70 56.97,87.01
                            54.03,80.57 54.11,80.88 50.90,77.98
                            47.98,75.52 43.95,72.00 39.51,72.50
                            35.08,73.00 29.70,75.77 27.07,78.96
                            24.45,82.14 16.60,94.48 15.75,102.92
                            14.89,111.38 23.82,117.15 32.27,116.09
                            40.15,115.09 50.12,110.06 53.00,105.00 Z"
              />
            </mask>

            <path
              mask="url(#mask)"
              d="M 60.46,75.11
                            C 60.46,75.11 50.53,66.75 44.69,65.24
                            38.86,63.73 35.21,62.85 28.46,66.68
                            20.36,70.34 8.11,77.11 1.96,98.91
                            -2.93,116.27 8.35,128.75 10.64,128.75
                            18.55,130.47 25.63,133.35 39.44,126.44
                            54.11,117.80 58.45,115.50 58.45,115.50
                            58.35,115.54 67.41,136.95 83.99,135.96
                            94.27,158.70 98.49,165.09 115.43,187.94
                            124.00,189.50 133.32,186.68 126.75,184.68
                            110.32,171.82 103.20,164.99 92.84,134.91
                            109.30,128.07 149.89,98.91 129.87,73.45
                            109.73,47.84 81.00,89.00 81.00,89.00
                            71.97,108.29 75.94,121.76 79.72,128.09
                            75.55,128.10 65.59,118.24 68.00,101.00
                            68.00,101.00 90.11,53.16 98.33,35.43
                            106.56,17.71 89.34,-12.93 69.03,6.92
                            48.72,26.78 59.09,61.79 59.09,61.79
                            59.09,61.79 60.46,75.11 60.46,75.11 Z"
            />
          </svg>
        </div>
        <div></div>
      </div>
    </LoadingSpinner>
  );
}

export default LoadingSpinner;

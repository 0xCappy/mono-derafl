/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { TicketRefund } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TicketRefundCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: "",
    createdAt: "",
    updatedAt: "",
    raffleNonce: "",
    ethAmount: "",
    refundee: "",
    chainId: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [raffleNonce, setRaffleNonce] = React.useState(
    initialValues.raffleNonce
  );
  const [ethAmount, setEthAmount] = React.useState(initialValues.ethAmount);
  const [refundee, setRefundee] = React.useState(initialValues.refundee);
  const [chainId, setChainId] = React.useState(initialValues.chainId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType(initialValues.type);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setRaffleNonce(initialValues.raffleNonce);
    setEthAmount(initialValues.ethAmount);
    setRefundee(initialValues.refundee);
    setChainId(initialValues.chainId);
    setErrors({});
  };
  const validations = {
    type: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
    updatedAt: [{ type: "Required" }],
    raffleNonce: [{ type: "Required" }],
    ethAmount: [],
    refundee: [],
    chainId: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          type,
          createdAt,
          updatedAt,
          raffleNonce,
          ethAmount,
          refundee,
          chainId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new TicketRefund(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TicketRefundCreateForm")}
      {...rest}
    >
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              createdAt,
              updatedAt,
              raffleNonce,
              ethAmount,
              refundee,
              chainId,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              type,
              createdAt: value,
              updatedAt,
              raffleNonce,
              ethAmount,
              refundee,
              chainId,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              type,
              createdAt,
              updatedAt: value,
              raffleNonce,
              ethAmount,
              refundee,
              chainId,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <TextField
        label="Raffle nonce"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={raffleNonce}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              createdAt,
              updatedAt,
              raffleNonce: value,
              ethAmount,
              refundee,
              chainId,
            };
            const result = onChange(modelFields);
            value = result?.raffleNonce ?? value;
          }
          if (errors.raffleNonce?.hasError) {
            runValidationTasks("raffleNonce", value);
          }
          setRaffleNonce(value);
        }}
        onBlur={() => runValidationTasks("raffleNonce", raffleNonce)}
        errorMessage={errors.raffleNonce?.errorMessage}
        hasError={errors.raffleNonce?.hasError}
        {...getOverrideProps(overrides, "raffleNonce")}
      ></TextField>
      <TextField
        label="Eth amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ethAmount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              createdAt,
              updatedAt,
              raffleNonce,
              ethAmount: value,
              refundee,
              chainId,
            };
            const result = onChange(modelFields);
            value = result?.ethAmount ?? value;
          }
          if (errors.ethAmount?.hasError) {
            runValidationTasks("ethAmount", value);
          }
          setEthAmount(value);
        }}
        onBlur={() => runValidationTasks("ethAmount", ethAmount)}
        errorMessage={errors.ethAmount?.errorMessage}
        hasError={errors.ethAmount?.hasError}
        {...getOverrideProps(overrides, "ethAmount")}
      ></TextField>
      <TextField
        label="Refundee"
        isRequired={false}
        isReadOnly={false}
        value={refundee}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              createdAt,
              updatedAt,
              raffleNonce,
              ethAmount,
              refundee: value,
              chainId,
            };
            const result = onChange(modelFields);
            value = result?.refundee ?? value;
          }
          if (errors.refundee?.hasError) {
            runValidationTasks("refundee", value);
          }
          setRefundee(value);
        }}
        onBlur={() => runValidationTasks("refundee", refundee)}
        errorMessage={errors.refundee?.errorMessage}
        hasError={errors.refundee?.hasError}
        {...getOverrideProps(overrides, "refundee")}
      ></TextField>
      <TextField
        label="Chain id"
        isRequired={true}
        isReadOnly={false}
        value={chainId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              createdAt,
              updatedAt,
              raffleNonce,
              ethAmount,
              refundee,
              chainId: value,
            };
            const result = onChange(modelFields);
            value = result?.chainId ?? value;
          }
          if (errors.chainId?.hasError) {
            runValidationTasks("chainId", value);
          }
          setChainId(value);
        }}
        onBlur={() => runValidationTasks("chainId", chainId)}
        errorMessage={errors.chainId?.errorMessage}
        hasError={errors.chainId?.hasError}
        {...getOverrideProps(overrides, "chainId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

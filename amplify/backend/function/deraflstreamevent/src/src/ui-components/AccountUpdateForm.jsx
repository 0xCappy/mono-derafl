/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Account } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AccountUpdateForm(props) {
  const {
    id: idProp,
    account,
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
    address: "",
    rafflesCreated: "",
    rafflesWon: "",
    rafflesEntered: "",
    ticketsBought: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [address, setAddress] = React.useState(initialValues.address);
  const [rafflesCreated, setRafflesCreated] = React.useState(
    initialValues.rafflesCreated
  );
  const [rafflesWon, setRafflesWon] = React.useState(initialValues.rafflesWon);
  const [rafflesEntered, setRafflesEntered] = React.useState(
    initialValues.rafflesEntered
  );
  const [ticketsBought, setTicketsBought] = React.useState(
    initialValues.ticketsBought
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = accountRecord
      ? { ...initialValues, ...accountRecord }
      : initialValues;
    setType(cleanValues.type);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setAddress(cleanValues.address);
    setRafflesCreated(cleanValues.rafflesCreated);
    setRafflesWon(cleanValues.rafflesWon);
    setRafflesEntered(cleanValues.rafflesEntered);
    setTicketsBought(cleanValues.ticketsBought);
    setErrors({});
  };
  const [accountRecord, setAccountRecord] = React.useState(account);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Account, idProp) : account;
      setAccountRecord(record);
    };
    queryData();
  }, [idProp, account]);
  React.useEffect(resetStateValues, [accountRecord]);
  const validations = {
    type: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
    updatedAt: [{ type: "Required" }],
    address: [{ type: "Required" }],
    rafflesCreated: [{ type: "Required" }],
    rafflesWon: [{ type: "Required" }],
    rafflesEntered: [{ type: "Required" }],
    ticketsBought: [{ type: "Required" }],
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
          address,
          rafflesCreated,
          rafflesWon,
          rafflesEntered,
          ticketsBought,
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
          await DataStore.save(
            Account.copyOf(accountRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AccountUpdateForm")}
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
              address,
              rafflesCreated,
              rafflesWon,
              rafflesEntered,
              ticketsBought,
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
              address,
              rafflesCreated,
              rafflesWon,
              rafflesEntered,
              ticketsBought,
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
              address,
              rafflesCreated,
              rafflesWon,
              rafflesEntered,
              ticketsBought,
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
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              createdAt,
              updatedAt,
              address: value,
              rafflesCreated,
              rafflesWon,
              rafflesEntered,
              ticketsBought,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Raffles created"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={rafflesCreated}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              createdAt,
              updatedAt,
              address,
              rafflesCreated: value,
              rafflesWon,
              rafflesEntered,
              ticketsBought,
            };
            const result = onChange(modelFields);
            value = result?.rafflesCreated ?? value;
          }
          if (errors.rafflesCreated?.hasError) {
            runValidationTasks("rafflesCreated", value);
          }
          setRafflesCreated(value);
        }}
        onBlur={() => runValidationTasks("rafflesCreated", rafflesCreated)}
        errorMessage={errors.rafflesCreated?.errorMessage}
        hasError={errors.rafflesCreated?.hasError}
        {...getOverrideProps(overrides, "rafflesCreated")}
      ></TextField>
      <TextField
        label="Raffles won"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={rafflesWon}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              createdAt,
              updatedAt,
              address,
              rafflesCreated,
              rafflesWon: value,
              rafflesEntered,
              ticketsBought,
            };
            const result = onChange(modelFields);
            value = result?.rafflesWon ?? value;
          }
          if (errors.rafflesWon?.hasError) {
            runValidationTasks("rafflesWon", value);
          }
          setRafflesWon(value);
        }}
        onBlur={() => runValidationTasks("rafflesWon", rafflesWon)}
        errorMessage={errors.rafflesWon?.errorMessage}
        hasError={errors.rafflesWon?.hasError}
        {...getOverrideProps(overrides, "rafflesWon")}
      ></TextField>
      <TextField
        label="Raffles entered"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={rafflesEntered}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              createdAt,
              updatedAt,
              address,
              rafflesCreated,
              rafflesWon,
              rafflesEntered: value,
              ticketsBought,
            };
            const result = onChange(modelFields);
            value = result?.rafflesEntered ?? value;
          }
          if (errors.rafflesEntered?.hasError) {
            runValidationTasks("rafflesEntered", value);
          }
          setRafflesEntered(value);
        }}
        onBlur={() => runValidationTasks("rafflesEntered", rafflesEntered)}
        errorMessage={errors.rafflesEntered?.errorMessage}
        hasError={errors.rafflesEntered?.hasError}
        {...getOverrideProps(overrides, "rafflesEntered")}
      ></TextField>
      <TextField
        label="Tickets bought"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={ticketsBought}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              createdAt,
              updatedAt,
              address,
              rafflesCreated,
              rafflesWon,
              rafflesEntered,
              ticketsBought: value,
            };
            const result = onChange(modelFields);
            value = result?.ticketsBought ?? value;
          }
          if (errors.ticketsBought?.hasError) {
            runValidationTasks("ticketsBought", value);
          }
          setTicketsBought(value);
        }}
        onBlur={() => runValidationTasks("ticketsBought", ticketsBought)}
        errorMessage={errors.ticketsBought?.errorMessage}
        hasError={errors.ticketsBought?.hasError}
        {...getOverrideProps(overrides, "ticketsBought")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || account)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || account) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

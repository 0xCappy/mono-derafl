/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CollectionCreateForm(props) {
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
    contractAddress: "",
    createdAt: "",
    updatedAt: "",
    symbol: "",
    rafflesCreated: "",
    contractDeployer: "",
    deployedBlockNumber: "",
    tokenType: "",
    totalSupply: "",
    chainId: "",
    name: "",
    openseaSlug: "",
    imageUrl: "",
    externalUrl: "",
    discordUrl: "",
    twitterUsername: "",
    description: "",
    floorPrice: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [contractAddress, setContractAddress] = React.useState(
    initialValues.contractAddress
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [symbol, setSymbol] = React.useState(initialValues.symbol);
  const [rafflesCreated, setRafflesCreated] = React.useState(
    initialValues.rafflesCreated
  );
  const [contractDeployer, setContractDeployer] = React.useState(
    initialValues.contractDeployer
  );
  const [deployedBlockNumber, setDeployedBlockNumber] = React.useState(
    initialValues.deployedBlockNumber
  );
  const [tokenType, setTokenType] = React.useState(initialValues.tokenType);
  const [totalSupply, setTotalSupply] = React.useState(
    initialValues.totalSupply
  );
  const [chainId, setChainId] = React.useState(initialValues.chainId);
  const [name, setName] = React.useState(initialValues.name);
  const [openseaSlug, setOpenseaSlug] = React.useState(
    initialValues.openseaSlug
  );
  const [imageUrl, setImageUrl] = React.useState(initialValues.imageUrl);
  const [externalUrl, setExternalUrl] = React.useState(
    initialValues.externalUrl
  );
  const [discordUrl, setDiscordUrl] = React.useState(initialValues.discordUrl);
  const [twitterUsername, setTwitterUsername] = React.useState(
    initialValues.twitterUsername
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [floorPrice, setFloorPrice] = React.useState(initialValues.floorPrice);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType(initialValues.type);
    setContractAddress(initialValues.contractAddress);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setSymbol(initialValues.symbol);
    setRafflesCreated(initialValues.rafflesCreated);
    setContractDeployer(initialValues.contractDeployer);
    setDeployedBlockNumber(initialValues.deployedBlockNumber);
    setTokenType(initialValues.tokenType);
    setTotalSupply(initialValues.totalSupply);
    setChainId(initialValues.chainId);
    setName(initialValues.name);
    setOpenseaSlug(initialValues.openseaSlug);
    setImageUrl(initialValues.imageUrl);
    setExternalUrl(initialValues.externalUrl);
    setDiscordUrl(initialValues.discordUrl);
    setTwitterUsername(initialValues.twitterUsername);
    setDescription(initialValues.description);
    setFloorPrice(initialValues.floorPrice);
    setErrors({});
  };
  const validations = {
    type: [{ type: "Required" }],
    contractAddress: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
    updatedAt: [{ type: "Required" }],
    symbol: [],
    rafflesCreated: [],
    contractDeployer: [],
    deployedBlockNumber: [],
    tokenType: [{ type: "Required" }],
    totalSupply: [],
    chainId: [{ type: "Required" }],
    name: [{ type: "Required" }],
    openseaSlug: [],
    imageUrl: [],
    externalUrl: [],
    discordUrl: [],
    twitterUsername: [],
    description: [],
    floorPrice: [],
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
          contractAddress,
          createdAt,
          updatedAt,
          symbol,
          rafflesCreated,
          contractDeployer,
          deployedBlockNumber,
          tokenType,
          totalSupply,
          chainId,
          name,
          openseaSlug,
          imageUrl,
          externalUrl,
          discordUrl,
          twitterUsername,
          description,
          floorPrice,
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
          await DataStore.save(new Collection(modelFields));
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
      {...getOverrideProps(overrides, "CollectionCreateForm")}
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
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
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
        label="Contract address"
        isRequired={true}
        isReadOnly={false}
        value={contractAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress: value,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.contractAddress ?? value;
          }
          if (errors.contractAddress?.hasError) {
            runValidationTasks("contractAddress", value);
          }
          setContractAddress(value);
        }}
        onBlur={() => runValidationTasks("contractAddress", contractAddress)}
        errorMessage={errors.contractAddress?.errorMessage}
        hasError={errors.contractAddress?.hasError}
        {...getOverrideProps(overrides, "contractAddress")}
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
              contractAddress,
              createdAt: value,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
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
              contractAddress,
              createdAt,
              updatedAt: value,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
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
        label="Symbol"
        isRequired={false}
        isReadOnly={false}
        value={symbol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol: value,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.symbol ?? value;
          }
          if (errors.symbol?.hasError) {
            runValidationTasks("symbol", value);
          }
          setSymbol(value);
        }}
        onBlur={() => runValidationTasks("symbol", symbol)}
        errorMessage={errors.symbol?.errorMessage}
        hasError={errors.symbol?.hasError}
        {...getOverrideProps(overrides, "symbol")}
      ></TextField>
      <TextField
        label="Raffles created"
        isRequired={false}
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
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated: value,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
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
        label="Contract deployer"
        isRequired={false}
        isReadOnly={false}
        value={contractDeployer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer: value,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.contractDeployer ?? value;
          }
          if (errors.contractDeployer?.hasError) {
            runValidationTasks("contractDeployer", value);
          }
          setContractDeployer(value);
        }}
        onBlur={() => runValidationTasks("contractDeployer", contractDeployer)}
        errorMessage={errors.contractDeployer?.errorMessage}
        hasError={errors.contractDeployer?.hasError}
        {...getOverrideProps(overrides, "contractDeployer")}
      ></TextField>
      <TextField
        label="Deployed block number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={deployedBlockNumber}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber: value,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.deployedBlockNumber ?? value;
          }
          if (errors.deployedBlockNumber?.hasError) {
            runValidationTasks("deployedBlockNumber", value);
          }
          setDeployedBlockNumber(value);
        }}
        onBlur={() =>
          runValidationTasks("deployedBlockNumber", deployedBlockNumber)
        }
        errorMessage={errors.deployedBlockNumber?.errorMessage}
        hasError={errors.deployedBlockNumber?.hasError}
        {...getOverrideProps(overrides, "deployedBlockNumber")}
      ></TextField>
      <TextField
        label="Token type"
        isRequired={true}
        isReadOnly={false}
        value={tokenType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType: value,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.tokenType ?? value;
          }
          if (errors.tokenType?.hasError) {
            runValidationTasks("tokenType", value);
          }
          setTokenType(value);
        }}
        onBlur={() => runValidationTasks("tokenType", tokenType)}
        errorMessage={errors.tokenType?.errorMessage}
        hasError={errors.tokenType?.hasError}
        {...getOverrideProps(overrides, "tokenType")}
      ></TextField>
      <TextField
        label="Total supply"
        isRequired={false}
        isReadOnly={false}
        value={totalSupply}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply: value,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.totalSupply ?? value;
          }
          if (errors.totalSupply?.hasError) {
            runValidationTasks("totalSupply", value);
          }
          setTotalSupply(value);
        }}
        onBlur={() => runValidationTasks("totalSupply", totalSupply)}
        errorMessage={errors.totalSupply?.errorMessage}
        hasError={errors.totalSupply?.hasError}
        {...getOverrideProps(overrides, "totalSupply")}
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
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId: value,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
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
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name: value,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Opensea slug"
        isRequired={false}
        isReadOnly={false}
        value={openseaSlug}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug: value,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.openseaSlug ?? value;
          }
          if (errors.openseaSlug?.hasError) {
            runValidationTasks("openseaSlug", value);
          }
          setOpenseaSlug(value);
        }}
        onBlur={() => runValidationTasks("openseaSlug", openseaSlug)}
        errorMessage={errors.openseaSlug?.errorMessage}
        hasError={errors.openseaSlug?.hasError}
        {...getOverrideProps(overrides, "openseaSlug")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={imageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl: value,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.imageUrl ?? value;
          }
          if (errors.imageUrl?.hasError) {
            runValidationTasks("imageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("imageUrl", imageUrl)}
        errorMessage={errors.imageUrl?.errorMessage}
        hasError={errors.imageUrl?.hasError}
        {...getOverrideProps(overrides, "imageUrl")}
      ></TextField>
      <TextField
        label="External url"
        isRequired={false}
        isReadOnly={false}
        value={externalUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl: value,
              discordUrl,
              twitterUsername,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.externalUrl ?? value;
          }
          if (errors.externalUrl?.hasError) {
            runValidationTasks("externalUrl", value);
          }
          setExternalUrl(value);
        }}
        onBlur={() => runValidationTasks("externalUrl", externalUrl)}
        errorMessage={errors.externalUrl?.errorMessage}
        hasError={errors.externalUrl?.hasError}
        {...getOverrideProps(overrides, "externalUrl")}
      ></TextField>
      <TextField
        label="Discord url"
        isRequired={false}
        isReadOnly={false}
        value={discordUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl: value,
              twitterUsername,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.discordUrl ?? value;
          }
          if (errors.discordUrl?.hasError) {
            runValidationTasks("discordUrl", value);
          }
          setDiscordUrl(value);
        }}
        onBlur={() => runValidationTasks("discordUrl", discordUrl)}
        errorMessage={errors.discordUrl?.errorMessage}
        hasError={errors.discordUrl?.hasError}
        {...getOverrideProps(overrides, "discordUrl")}
      ></TextField>
      <TextField
        label="Twitter username"
        isRequired={false}
        isReadOnly={false}
        value={twitterUsername}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername: value,
              description,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.twitterUsername ?? value;
          }
          if (errors.twitterUsername?.hasError) {
            runValidationTasks("twitterUsername", value);
          }
          setTwitterUsername(value);
        }}
        onBlur={() => runValidationTasks("twitterUsername", twitterUsername)}
        errorMessage={errors.twitterUsername?.errorMessage}
        hasError={errors.twitterUsername?.hasError}
        {...getOverrideProps(overrides, "twitterUsername")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description: value,
              floorPrice,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Floor price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={floorPrice}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              type,
              contractAddress,
              createdAt,
              updatedAt,
              symbol,
              rafflesCreated,
              contractDeployer,
              deployedBlockNumber,
              tokenType,
              totalSupply,
              chainId,
              name,
              openseaSlug,
              imageUrl,
              externalUrl,
              discordUrl,
              twitterUsername,
              description,
              floorPrice: value,
            };
            const result = onChange(modelFields);
            value = result?.floorPrice ?? value;
          }
          if (errors.floorPrice?.hasError) {
            runValidationTasks("floorPrice", value);
          }
          setFloorPrice(value);
        }}
        onBlur={() => runValidationTasks("floorPrice", floorPrice)}
        errorMessage={errors.floorPrice?.errorMessage}
        hasError={errors.floorPrice?.hasError}
        {...getOverrideProps(overrides, "floorPrice")}
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

import React, { useState, useRef } from "react"
import { SimpleGrid, Card, Button, Image } from "@mantine/core"
import { FileInput, Container } from "@mantine/core"

import { IconUpload, IconPhoto, IconX } from "@tabler/icons"
// import { IconUpload } from "@tabler/icons"
// import { FileButton } from '@mantine/core';
// import Drop from "../components/dropFile"
// import {Uploader} from 'react-uploader';
// import { UploadButton } from "react-uploader"

// import { FileInput } from '@mantine/core';
// import { IconUpload } from "@tabler/icons"

// import { Dropzone, FileItem } from "@dropzone-ui/react"
import Layout from "../components/layout"
import Drop from "../components/dropFile"
import { BorderRadius } from "tabler-icons-react"

export default function main() {
  // const
  const ref = useRef(null)
  const [files, setFiles] = useState()
  const [receivedFiles, setReceivedFiles] = useState()
  console.log(files, "filesfrom indexts")

  return (
    <Layout>
      <SimpleGrid cols={1}>
        <Drop paramSetFiles={setFiles} />
        <Container
          sx={{ height: "13rem", width: "70vw", borderRadius: ".5rem" }}
        >
          <Image
            sx={{
              border: ".15rem dashed #ced4da",
              borderRadius: ".2rem",
            }}
            height={"100%"}
            width={"100%"}
            src={receivedFiles || ""}
            alt="You have'nt scaled any pics yet"
            caption={"scaled version of the pic(demo)"}
          />
        </Container>
      </SimpleGrid>
    </Layout>
  )
}

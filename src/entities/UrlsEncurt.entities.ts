import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UrlsConsultLog } from "./UrlsConsultLog.entities";

@Entity("urls_encurt", { schema: "desafioSpeedIo" })
export default class UrlsEncurt {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "url" })
  url: string;

  @Column("varchar", { name: "codeUrl", length: 250 })
  codeUrl: string;

  @Column("varchar", { name: "encurted_url", length: 250 })
  encurtedUrl: string;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;

  @OneToMany(
    () => UrlsConsultLog,
    (urlsConsultLog) => urlsConsultLog.encurtedUrl
  )
  urlsConsultLogs: UrlsConsultLog[];
}

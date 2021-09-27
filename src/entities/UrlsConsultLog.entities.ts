import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import UrlsEncurt from "./UrlsEncurt.entities";

@Index("encurted_url_id", ["encurtedUrlId"], {})
@Entity("urls_consult_log", { schema: "desafioSpeedIo" })
export class UrlsConsultLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "encurted_url_id", nullable: true })
  encurtedUrlId: number | null;

  @Column("int", { name: "number_log", nullable: true })
  numberLog: number | null;

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

  @ManyToOne(() => UrlsEncurt, (urlsEncurt) => urlsEncurt.urlsConsultLogs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "encurted_url_id", referencedColumnName: "id" }])
  encurtedUrl: UrlsEncurt;
}
